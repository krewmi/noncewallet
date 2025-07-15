import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  timestamp: number;
}

export interface FilterState {
  category: string[];
  priceRange: [number, number];
  brand: string[];
  rating: number;
  inStock: boolean;
  sortBy: 'name' | 'price' | 'rating' | 'newest' | 'oldest';
  sortOrder: 'asc' | 'desc';
}

export interface UIState {
  // Navigation
  isMobileMenuOpen: boolean;
  
  // Modals
  activeModal: string | null;
  
  // Notifications
  notifications: Notification[];
  
  // Search
  searchQuery: string;
  searchResults: any[];
  isSearching: boolean;
  
  // Filters
  filters: FilterState;
  
  // Loading states
  pageLoading: boolean;
  
  // Sidebar (for admin)
  sidebarCollapsed: boolean;
  
  // Bulk selection
  selectedItems: string[];
  bulkActionMode: boolean;
}

// Initial state
const initialState: UIState = {
  isMobileMenuOpen: false,
  activeModal: null,
  notifications: [],
  searchQuery: '',
  searchResults: [],
  isSearching: false,
  filters: {
    category: [],
    priceRange: [0, 1000],
    brand: [],
    rating: 0,
    inStock: false,
    sortBy: 'newest',
    sortOrder: 'desc',
  },
  pageLoading: false,
  sidebarCollapsed: false,
  selectedItems: [],
  bulkActionMode: false,
};

// Slice
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Navigation
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    
    // Modals
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModal = action.payload;
    },
    
    closeModal: (state) => {
      state.activeModal = null;
    },
    
    // Notifications
    addNotification: (state, action: PayloadAction<Omit<Notification, 'id' | 'timestamp'>>) => {
      const notification: Notification = {
        ...action.payload,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        timestamp: Date.now(),
      };
      state.notifications.push(notification);
    },
    
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload
      );
    },
    
    clearNotifications: (state) => {
      state.notifications = [];
    },
    
    // Search
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    
    setSearchResults: (state, action: PayloadAction<any[]>) => {
      state.searchResults = action.payload;
    },
    
    setSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    
    clearSearch: (state) => {
      state.searchQuery = '';
      state.searchResults = [];
      state.isSearching = false;
    },
    
    // Filters
    updateFilters: (state, action: PayloadAction<Partial<FilterState>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    
    resetFilters: (state) => {
      state.filters = initialState.filters;
    },
    
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.filters.priceRange = action.payload;
    },
    
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      const index = state.filters.category.indexOf(category);
      
      if (index > -1) {
        state.filters.category.splice(index, 1);
      } else {
        state.filters.category.push(category);
      }
    },
    
    toggleBrand: (state, action: PayloadAction<string>) => {
      const brand = action.payload;
      const index = state.filters.brand.indexOf(brand);
      
      if (index > -1) {
        state.filters.brand.splice(index, 1);
      } else {
        state.filters.brand.push(brand);
      }
    },
    
    // Loading
    setPageLoading: (state, action: PayloadAction<boolean>) => {
      state.pageLoading = action.payload;
    },
    
    // Sidebar
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
    
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
    
    // Bulk selection
    toggleItemSelection: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const index = state.selectedItems.indexOf(itemId);
      
      if (index > -1) {
        state.selectedItems.splice(index, 1);
      } else {
        state.selectedItems.push(itemId);
      }
    },
    
    selectAllItems: (state, action: PayloadAction<string[]>) => {
      state.selectedItems = action.payload;
    },
    
    clearSelection: (state) => {
      state.selectedItems = [];
    },
    
    toggleBulkActionMode: (state) => {
      state.bulkActionMode = !state.bulkActionMode;
      if (!state.bulkActionMode) {
        state.selectedItems = [];
      }
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  openModal,
  closeModal,
  addNotification,
  removeNotification,
  clearNotifications,
  setSearchQuery,
  setSearchResults,
  setSearching,
  clearSearch,
  updateFilters,
  resetFilters,
  setPriceRange,
  toggleCategory,
  toggleBrand,
  setPageLoading,
  toggleSidebar,
  setSidebarCollapsed,
  toggleItemSelection,
  selectAllItems,
  clearSelection,
  toggleBulkActionMode,
} = uiSlice.actions;