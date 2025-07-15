import type {
  User,
  Product,
  Category,
  Order,
  OrderItem,
  CartItem,
  Address,
  Review,
  ProductImage,
  ProductVariant,
  WishlistItem,
  Role,
  ProductStatus,
  OrderStatus,
  PaymentStatus,
} from '@prisma/client'

// Extended types with relations
export type ProductWithDetails = Product & {
  category: Category | null
  images: ProductImage[]
  variants: ProductVariant[]
  reviews: Review[]
  _count: {
    reviews: number
  }
}

export type CartItemWithProduct = CartItem & {
  product: ProductWithDetails
}

export type OrderWithDetails = Order & {
  items: (OrderItem & {
    product: Product
  })[]
  address: Address | null
  user: Pick<User, 'id' | 'name' | 'email'>
}

export type CategoryWithProducts = Category & {
  products: Product[]
  children: Category[]
  _count: {
    products: number
  }
}

export type UserWithDetails = User & {
  orders: Order[]
  addresses: Address[]
  cartItems: CartItemWithProduct[]
  wishlistItems: (WishlistItem & {
    product: Product
  })[]
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Form types
export interface ProductFormData {
  name: string
  description: string
  price: number
  comparePrice?: number
  sku?: string
  stock: number
  categoryId?: string
  status: ProductStatus
  featured: boolean
  images: string[]
  variants: {
    name: string
    value: string
    price?: number
    stock?: number
    sku?: string
  }[]
}

export interface AddressFormData {
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

export interface CheckoutFormData {
  email: string
  address: AddressFormData
  paymentMethod: string
}

// Filter and search types
export interface ProductFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  featured?: boolean
  search?: string
  sortBy?: 'name' | 'price' | 'createdAt' | 'featured'
  sortOrder?: 'asc' | 'desc'
}

export interface AdminFilters {
  search?: string
  status?: string
  dateFrom?: string
  dateTo?: string
  page?: number
  limit?: number
}

// Store state types
export interface CartState {
  items: CartItemWithProduct[]
  isLoading: boolean
  addItem: (productId: string, quantity?: number) => Promise<void>
  removeItem: (itemId: string) => Promise<void>
  updateQuantity: (itemId: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  getTotalItems: () => number
  getTotalPrice: () => number
}

export interface UserState {
  user: User | null
  isLoading: boolean
  setUser: (user: User | null) => void
  logout: () => void
}

// Navigation types
export interface NavItem {
  title: string
  href: string
  icon?: string
  children?: NavItem[]
}

// Export Prisma types
export type {
  User,
  Product,
  Category,
  Order,
  OrderItem,
  CartItem,
  Address,
  Review,
  ProductImage,
  ProductVariant,
  WishlistItem,
  Role,
  ProductStatus,
  OrderStatus,
  PaymentStatus,
}