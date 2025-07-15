import { z } from 'zod'
import { ProductStatus, Role } from '@prisma/client'

// Auth schemas
export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

// Product schemas
export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  description: z.string().optional(),
  price: z.number().min(0, 'Price must be positive'),
  comparePrice: z.number().min(0).optional(),
  sku: z.string().optional(),
  stock: z.number().min(0, 'Stock must be non-negative'),
  categoryId: z.string().optional(),
  status: z.nativeEnum(ProductStatus),
  featured: z.boolean(),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  variants: z.array(z.object({
    name: z.string().min(1, 'Variant name is required'),
    value: z.string().min(1, 'Variant value is required'),
    price: z.number().min(0).optional(),
    stock: z.number().min(0).optional(),
    sku: z.string().optional(),
  })).optional(),
})

export const productFilterSchema = z.object({
  category: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  inStock: z.boolean().optional(),
  featured: z.boolean().optional(),
  search: z.string().optional(),
  sortBy: z.enum(['name', 'price', 'createdAt', 'featured']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional(),
})

// Category schemas
export const categorySchema = z.object({
  name: z.string().min(1, 'Category name is required'),
  description: z.string().optional(),
  image: z.string().optional(),
  parentId: z.string().optional(),
  isActive: z.boolean(),
})

// Address schemas
export const addressSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  company: z.string().optional(),
  address1: z.string().min(1, 'Address is required'),
  address2: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  postalCode: z.string().min(1, 'Postal code is required'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().optional(),
  isDefault: z.boolean(),
})

// Order schemas
export const checkoutSchema = z.object({
  email: z.string().email('Invalid email address'),
  address: addressSchema,
  paymentMethod: z.string().min(1, 'Payment method is required'),
})

export const cartItemSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
})

// User schemas
export const userUpdateSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Invalid email address').optional(),
  image: z.string().optional(),
})

export const userAdminSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.nativeEnum(Role),
  password: z.string().min(6, 'Password must be at least 6 characters').optional(),
})

// Review schemas
export const reviewSchema = z.object({
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
  title: z.string().optional(),
  content: z.string().optional(),
  productId: z.string().min(1, 'Product ID is required'),
})

// Search and filter schemas
export const searchSchema = z.object({
  q: z.string().min(1, 'Search query is required'),
  category: z.string().optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional(),
})

export const adminFilterSchema = z.object({
  search: z.string().optional(),
  status: z.string().optional(),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
  page: z.number().min(1).optional(),
  limit: z.number().min(1).max(100).optional(),
})

// Export types
export type SignInInput = z.infer<typeof signInSchema>
export type SignUpInput = z.infer<typeof signUpSchema>
export type ProductInput = z.infer<typeof productSchema>
export type ProductFilterInput = z.infer<typeof productFilterSchema>
export type CategoryInput = z.infer<typeof categorySchema>
export type AddressInput = z.infer<typeof addressSchema>
export type CheckoutInput = z.infer<typeof checkoutSchema>
export type CartItemInput = z.infer<typeof cartItemSchema>
export type UserUpdateInput = z.infer<typeof userUpdateSchema>
export type UserAdminInput = z.infer<typeof userAdminSchema>
export type ReviewInput = z.infer<typeof reviewSchema>
export type SearchInput = z.infer<typeof searchSchema>
export type AdminFilterInput = z.infer<typeof adminFilterSchema>