import { configureStore } from '@reduxjs/toolkit'
import favoritSlice from './favorites/favoriteSlice'
import quoteSlice from './quotes/quoteSlice'
import { useDispatch } from 'react-redux'


export const store = configureStore({
  reducer: {
    favorite: favoritSlice,
    quote: quoteSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

