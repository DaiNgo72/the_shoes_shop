import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	listProduct: [],
};

const ListProductSlice = createSlice({
	name: 'ListProductSlice',
	initialState,
	reducers: {},
});

export const {} = ListProductSlice.actions;

export default ListProductSlice.reducer;
