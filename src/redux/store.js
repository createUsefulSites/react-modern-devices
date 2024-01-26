import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import models from './slices/modelSlice';

export const store = configureStore({
    reducer: { filter, cart, models },
});
