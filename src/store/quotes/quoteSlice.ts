import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface Quote {
  id: number;
  content: string;
  originator?: {
    name: string;
  };
}

interface QuoteState {
  quote: Quote;
  lang: string;
  status: 'loading' | 'success' | 'error';
}

const getInitialLanguage = () => localStorage.getItem('lang') || 'en';

export const fetchQuote = createAsyncThunk<Quote>(
  'quote/fetchQuote',
  async () => {
    try {
      const response = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/', {
        headers: {
          'x-rapidapi-host': 'quotes15.p.rapidapi.com',
          'x-rapidapi-key': 'c6668371d8msh585853737016304p167887jsne2d94889a20b',
        },
        params: {
          language_code: getInitialLanguage(),
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState: QuoteState = {
  quote: {
    id: 0,
    content: '',
    originator: {
      name: '',
    },
  },
  lang: getInitialLanguage(),
  status: 'loading',
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem('lang', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'success';
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { setQuote, setLang } = quoteSlice.actions;

export default quoteSlice.reducer;
