import { 
  User, 
  Product, 
  Category, 
  Order, 
  OrderItem, 
  CartItem, 
  Address, 
  Review, 
  Payment,
  ProductImage,
  ProductVariant,
  Role,
  OrderStatus,
  PaymentStatus,
  PaymentMethod,
  VariantType
} from '@prisma/client'

// Extended types with relations
export type ProductWithImages = Product & {
  images: ProductImage[]
  variants: ProductVariant[]
  category: Category
  reviews: Review[]
}

export type OrderWithItems = Order & {
  items: (OrderItem & {
    product: Product
  })[]
  user: User
  address: Address
}

export type CartItemWithProduct = CartItem & {
  product: ProductWithImages
}

export type UserWithRelations = User & {
  addresses: Address[]
  orders: OrderWithItems[]
}

export type ReviewWithUser = Review & {
  user: User
}

// API Response types
export interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Search and filter types
export interface ProductFilters {
  categoryId?: string
  minPrice?: number
  maxPrice?: number
  search?: string
  sortBy?: 'price' | 'name' | 'createdAt' | 'rating'
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
  inStock?: boolean
  featured?: boolean
}

export interface SearchResult {
  products: ProductWithImages[]
  categories: Category[]
  total: number
}

// Form types
export interface CreateProductData {
  name: string
  description: string
  price: number
  comparePrice?: number
  sku?: string
  categoryId: string
  inventory: number
  isActive: boolean
  isFeatured: boolean
  images: string[]
  variants: {
    name: string
    value: string
    type: VariantType
  }[]
}

export interface CreateOrderData {
  items: {
    productId: string
    quantity: number
  }[]
  addressId: string
  paymentMethod: PaymentMethod
}

export interface CreateAddressData {
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone?: string
  isDefault: boolean
}

// Shopping cart types
export interface CartState {
  items: CartItemWithProduct[]
  total: number
  itemCount: number
}

export interface CartActions {
  addItem: (productId: string, quantity?: number) => Promise<void>
  removeItem: (productId: string) => Promise<void>
  updateQuantity: (productId: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  loadCart: () => Promise<void>
}

// Analytics types
export interface SalesData {
  date: string
  sales: number
  orders: number
}

export interface DashboardStats {
  totalSales: number
  totalOrders: number
  totalProducts: number
  totalCustomers: number
  recentOrders: OrderWithItems[]
  salesData: SalesData[]
}

// Export Prisma types
export {
  User,
  Product,
  Category,
  Order,
  OrderItem,
  CartItem,
  Address,
  Review,
  Payment,
  ProductImage,
  ProductVariant,
  Role,
  OrderStatus,
  PaymentStatus,
  PaymentMethod,
  VariantType
}