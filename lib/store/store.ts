import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth-slice';
import { cartSlice } from './slices/cart-slice';
import { uiSlice } from './slices/ui-slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer,
      cart: cartSlice.reducer,
      ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types for serialization checks
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];