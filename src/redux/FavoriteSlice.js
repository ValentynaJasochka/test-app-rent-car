import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './cars';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: initialState.favorite,
  reducers: {
    handleFavorite({id}, {payload}) {     
      const idx = id.indexOf(payload)     
      if (!~idx) {
        id.push(payload)       
      }
      else if(id.includes(payload)) {         
        id.splice(idx,1)
      }
    }
    
  },
});

export const { handleFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;