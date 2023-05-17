import { configureStore } from '@reduxjs/toolkit';
import ListProductSlice from './slices/ListProduct';

export const store = configureStore({
	reducer: {
		ListProductSlice: ListProductSlice,
	},
});
