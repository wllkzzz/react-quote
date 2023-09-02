import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Favorite {
  id: number;
  content: string;
  originator?: {
    name: string;
  };
}

interface FavoriteState {
  data: Favorite[];
}

const initialState: FavoriteState = {
  data: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<Favorite>) {
      const isExist = state.data.find((item) => item.id === action.payload.id);

      if (isExist) {
        console.log("No");
      } else {
        state.data.push(action.payload);
      }
    },
    deleteFromFavorite(state, action: PayloadAction<number>) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
