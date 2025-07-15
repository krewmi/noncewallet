import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { db } from '@/lib/db'
import { authOptions } from '@/lib/auth'
import { productSchema, productFilterSchema } from '@/lib/validations'
import { slugify } from '@/lib/utils'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const params = Object.fromEntries(searchParams.entries())

    // Parse and validate query parameters
    const filters = productFilterSchema.parse({
      ...params,
      page: params.page ? parseInt(params.page) : 1,
      limit: params.limit ? parseInt(params.limit) : 12,
      minPrice: params.minPrice ? parseFloat(params.minPrice) : undefined,
      maxPrice: params.maxPrice ? parseFloat(params.maxPrice) : undefined,
      inStock: params.inStock === 'true',
      featured: params.featured === 'true',
    })

    // Build where clause
    const where: any = {
      status: 'ACTIVE',
    }

    if (filters.category) {
      where.category = {
        slug: filters.category,
      }
    }

    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } },
      ]
    }

    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      where.price = {}
      if (filters.minPrice !== undefined) where.price.gte = filters.minPrice
      if (filters.maxPrice !== undefined) where.price.lte = filters.maxPrice
    }

    if (filters.inStock) {
      where.stock = { gt: 0 }
    }

    if (filters.featured) {
      where.featured = true
    }

    // Build orderBy clause
    const orderBy: any = {}
    if (filters.sortBy) {
      orderBy[filters.sortBy] = filters.sortOrder || 'asc'
    } else {
      orderBy.createdAt = 'desc'
    }

    // Calculate pagination
    const page = filters.page || 1
    const limit = filters.limit || 12
    const skip = (page - 1) * limit

    // Fetch products with pagination
    const [products, totalCount] = await Promise.all([
      db.product.findMany({
        where,
        include: {
          category: true,
          images: {
            orderBy: { position: 'asc' },
          },
          variants: true,
          reviews: {
            select: { rating: true },
          },
          _count: {
            select: { reviews: true },
          },
        },
        orderBy,
        skip,
        take: limit,
      }),
      db.product.count({ where }),
    ])

    const totalPages = Math.ceil(totalCount / limit)

    return NextResponse.json({
      success: true,
      data: products,
      pagination: {
        page,
        limit,
        total: totalCount,
        pages: totalPages,
      },
    })
  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validatedData = productSchema.parse(body)

    // Generate slug from name
    const slug = slugify(validatedData.name)

    // Check if slug already exists
    const existingProduct = await db.product.findUnique({
      where: { slug },
    })

    if (existingProduct) {
      return NextResponse.json(
        { success: false, error: 'Product with this name already exists' },
        { status: 400 }
      )
    }

    // Create product with images and variants
    const product = await db.product.create({
      data: {
        name: validatedData.name,
        slug,
        description: validatedData.description,
        price: validatedData.price,
        comparePrice: validatedData.comparePrice,
        sku: validatedData.sku,
        stock: validatedData.stock,
        status: validatedData.status,
        featured: validatedData.featured,
        categoryId: validatedData.categoryId,
        images: {
          create: validatedData.images.map((url, index) => ({
            url,
            position: index,
          })),
        },
        variants: validatedData.variants?.length
          ? {
              create: validatedData.variants,
            }
          : undefined,
      },
      include: {
        category: true,
        images: {
          orderBy: { position: 'asc' },
        },
        variants: true,
      },
    })

    return NextResponse.json({
      success: true,
      data: product,
      message: 'Product created successfully',
    })
  } catch (error) {
    console.error('Create product error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    )
  }
}