import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './slices/Product';
import UserReducer from './slices/User';
export const store = configureStore({
	reducer: {
		ProductReducer: ProductReducer,
		UserReducer,
	},
});
