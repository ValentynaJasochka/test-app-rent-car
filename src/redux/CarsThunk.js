import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { limit, URL } from '../constants/constants';

axios.defaults.baseURL = URL;

export const getCarsThunk = createAsyncThunk(
  'cars/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`advert?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      toast.error('Oops! Something went wrong! Try reloading the page!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
