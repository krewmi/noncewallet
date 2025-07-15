import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { CartItemWithProduct, CartState } from '@/types'

interface CartStore extends CartState {
  // Internal methods
  syncWithServer: () => Promise<void>
  loadFromServer: () => Promise<void>
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,

      addItem: async (productId: string, quantity: number = 1) => {
        set({ isLoading: true })
        try {
          const response = await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId, quantity }),
          })

          if (!response.ok) {
            throw new Error('Failed to add item to cart')
          }

          const { data } = await response.json()
          
          set((state) => {
            const existingItemIndex = state.items.findIndex(
              (item) => item.productId === productId
            )

            if (existingItemIndex >= 0) {
              const updatedItems = [...state.items]
              updatedItems[existingItemIndex] = data
              return { items: updatedItems }
            } else {
              return { items: [...state.items, data] }
            }
          })
        } catch (error) {
          console.error('Error adding item to cart:', error)
          throw error
        } finally {
          set({ isLoading: false })
        }
      },

      removeItem: async (itemId: string) => {
        set({ isLoading: true })
        try {
          const response = await fetch(`/api/cart/${itemId}`, {
            method: 'DELETE',
          })

          if (!response.ok) {
            throw new Error('Failed to remove item from cart')
          }

          set((state) => ({
            items: state.items.filter((item) => item.id !== itemId),
          }))
        } catch (error) {
          console.error('Error removing item from cart:', error)
          throw error
        } finally {
          set({ isLoading: false })
        }
      },

      updateQuantity: async (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          return get().removeItem(itemId)
        }

        set({ isLoading: true })
        try {
          const response = await fetch(`/api/cart/${itemId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity }),
          })

          if (!response.ok) {
            throw new Error('Failed to update item quantity')
          }

          const { data } = await response.json()

          set((state) => ({
            items: state.items.map((item) =>
              item.id === itemId ? data : item
            ),
          }))
        } catch (error) {
          console.error('Error updating item quantity:', error)
          throw error
        } finally {
          set({ isLoading: false })
        }
      },

      clearCart: async () => {
        set({ isLoading: true })
        try {
          const response = await fetch('/api/cart', {
            method: 'DELETE',
          })

          if (!response.ok) {
            throw new Error('Failed to clear cart')
          }

          set({ items: [] })
        } catch (error) {
          console.error('Error clearing cart:', error)
          throw error
        } finally {
          set({ isLoading: false })
        }
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      },

      syncWithServer: async () => {
        set({ isLoading: true })
        try {
          const response = await fetch('/api/cart')
          if (response.ok) {
            const { data } = await response.json()
            set({ items: data || [] })
          }
        } catch (error) {
          console.error('Error syncing cart with server:', error)
        } finally {
          set({ isLoading: false })
        }
      },

      loadFromServer: async () => {
        return get().syncWithServer()
      },
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items.map((item) => ({
          id: item.id,
          productId: item.productId,
          quantity: item.quantity,
        })),
      }),
    }
  )
)