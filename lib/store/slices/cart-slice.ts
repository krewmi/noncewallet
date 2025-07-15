import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug: string;
  variant?: {
    color?: string;
    size?: string;
    sku?: string;
  };
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
}

// Initial state
const initialState: CartState = {
  items: [],
  isOpen: false,
  totalItems: 0,
  totalPrice: 0,
};

// Helper functions
const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

const findItemIndex = (items: CartItem[], productId: string, variant?: CartItem['variant']) => {
  return items.findIndex(item => {
    if (item.productId !== productId) return false;
    
    // If no variant, match items without variants
    if (!variant && !item.variant) return true;
    
    // If variant exists, match all variant properties
    if (variant && item.variant) {
      return (
        item.variant.color === variant.color &&
        item.variant.size === variant.size &&
        item.variant.sku === variant.sku
      );
    }
    
    return false;
  });
};

// Slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'> & { quantity?: number }>) => {
      const { quantity = 1, ...item } = action.payload;
      const existingIndex = findItemIndex(state.items, item.productId, item.variant);

      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += quantity;
      } else {
        state.items.push({ ...item, quantity });
      }

      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },

    removeFromCart: (state, action: PayloadAction<{ productId: string; variant?: CartItem['variant'] }>) => {
      const { productId, variant } = action.payload;
      const index = findItemIndex(state.items, productId, variant);

      if (index >= 0) {
        state.items.splice(index, 1);
        const totals = calculateTotals(state.items);
        state.totalItems = totals.totalItems;
        state.totalPrice = totals.totalPrice;
      }
    },

    updateQuantity: (state, action: PayloadAction<{ 
      productId: string; 
      quantity: number; 
      variant?: CartItem['variant'];
    }>) => {
      const { productId, quantity, variant } = action.payload;
      const index = findItemIndex(state.items, productId, variant);

      if (index >= 0) {
        if (quantity <= 0) {
          state.items.splice(index, 1);
        } else {
          state.items[index].quantity = quantity;
        }

        const totals = calculateTotals(state.items);
        state.totalItems = totals.totalItems;
        state.totalPrice = totals.totalPrice;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.isOpen = false;
    },

    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    openCart: (state) => {
      state.isOpen = true;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },

    incrementQuantity: (state, action: PayloadAction<{ 
      productId: string; 
      variant?: CartItem['variant'];
    }>) => {
      const { productId, variant } = action.payload;
      const index = findItemIndex(state.items, productId, variant);

      if (index >= 0) {
        state.items[index].quantity += 1;
        const totals = calculateTotals(state.items);
        state.totalItems = totals.totalItems;
        state.totalPrice = totals.totalPrice;
      }
    },

    decrementQuantity: (state, action: PayloadAction<{ 
      productId: string; 
      variant?: CartItem['variant'];
    }>) => {
      const { productId, variant } = action.payload;
      const index = findItemIndex(state.items, productId, variant);

      if (index >= 0) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
        } else {
          state.items.splice(index, 1);
        }

        const totals = calculateTotals(state.items);
        state.totalItems = totals.totalItems;
        state.totalPrice = totals.totalPrice;
      }
    },

    // Load cart from localStorage (for persistence)
    loadCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalPrice = totals.totalPrice;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
  incrementQuantity,
  decrementQuantity,
  loadCart,
} = cartSlice.actions;