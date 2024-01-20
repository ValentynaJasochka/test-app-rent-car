import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './cars';
import { getCarsThunk } from './CarsThunk';

const handlePending = ({ isLoading }) => {
  isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, ...payload];
  state.loadMore = payload.length === 12;
};

const handleRejected = ({ isLoading, error }, { payload }) => {
  isLoading = false;
  error = payload;
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState: initialState.cars,
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.pending, handlePending)
      .addCase(getCarsThunk.fulfilled, handleFulfilled)
      .addCase(getCarsThunk.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
