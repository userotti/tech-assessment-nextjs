import { create } from 'zustand'
import { AppState, Quote } from './types'

export const useQuoteStore = create<AppState>((set) => ({
  quotes: [],
  addQuote: (quote: Quote) => {
    set((state: AppState) => ({
      quotes: [...state.quotes, quote],
    }))
  }
}))