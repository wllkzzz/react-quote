import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const getInitialLanguage = () => localStorage.getItem('lang') || 'en';

export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async (_, { getState }) => {
    const lang = getState().quote.lang;
    const response = await axios({
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
        'x-rapidapi-key': 'c6668371d8msh585853737016304p167887jsne2d94889a20b',
      },
      params: {
        language_code: lang,
      },
    });

    return response.data;
  }
);

const initialState = {
  quote: [],
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
        state.quote = [];
        state.status = 'loading';
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = 'success';
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state) => {
        state.quote = [];
        state.status = 'error';
      });
  },
});

export const { setQuote, setLang } = quoteSlice.actions;

export default quoteSlice.reducer;
