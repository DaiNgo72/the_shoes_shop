import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './slices/Product';

export const store = configureStore({
	reducer: {
		ProductReducer: ProductReducer,
	},
});
