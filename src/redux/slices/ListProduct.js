// rxslice
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

// const ListProductReducer = (state, action) => {
// 	switch (action.type) {
// 		default:
// 			return state;
// 	}
// };

// (state,action) =>{}

// const createSlice = ({ name, initialState, reducers }) => {
// 	return {
// 		reducer: (state, action) => {
// 			switch (action.type) {
// 				default:
// 					return state;
// 			}
// 		},
// 	};
// };

// const { reducer } = createSlice({});
// export default reducer;
