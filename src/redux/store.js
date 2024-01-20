import { configureStore } from '@reduxjs/toolkit';
import { favoriteReducer} from './FavoriteSlice';
import { carsReducer } from './CarsSlice';

import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const favoritePersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['id'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer)
  },
});
export const persistor = persistStore(store);


