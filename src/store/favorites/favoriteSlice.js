import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    data: []
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite(state, action) {
            const isExist = state.data.find((item) => item.id === action.payload.id)

            if(isExist) {
                console.log("No");
            } else {
                state.data.push(action.payload)
            }
        },
        deleteFromFavorite(state, action) {
            state.data = state.data.filter((item) => item.id !== action.payload.id);       
        },
    }
})

export const {addToFavorite, deleteFromFavorite} = favoriteSlice.actions;



export default favoriteSlice.reducer