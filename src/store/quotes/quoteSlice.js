import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote', async (lang) => {
    const response = await axios({
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": 'c6668371d8msh585853737016304p167887jsne2d94889a20b'
      },
      params: {
        language_code: lang
      }
    });

    return response.data
  }
);

const initialState = {
  quote: [],
  lang: 'en',
  status: 'loading' // loading | success | error
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setQuotes: (state, action) => {
      state.quotes = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuote.pending, (state, action) => {
      state.quotes = []
      state.status = 'loading'
    }),
    builder.addCase(fetchQuote.fulfilled, (state, action) => {
      state.status = 'success'
      state.quotes = action.payload;
    }),
    builder.addCase(fetchQuote.rejected, (state, action) => {
      state.quotes = []
      state.status = 'error'
      console.log(action.payload);
    })
  }
});

export const { setQuotes, setLang } = quoteSlice.actions;

export default quoteSlice.reducer;
