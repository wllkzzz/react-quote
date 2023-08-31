import { configureStore } from '@reduxjs/toolkit'
import favoritSlice from './favorites/favoriteSlice'
import quoteSlice from './quotes/quoteSlice'


export const store = configureStore({
  reducer: {
    favorite: favoritSlice,
    quote: quoteSlice,
  },
})