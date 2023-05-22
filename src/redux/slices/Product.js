// rxslice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	listProduct: [],
	productDetail: {},
};

const ProductSlice = createSlice({
	name: 'ProductSlice',
	initialState,
	// switch case ???
	reducers: {
		setListProduct: (state, action) => {
			state.listProduct = action.payload;

			// không dùng return state;
			// redux + immer => làm giúp nhiệm vụ clone object cho chúng ta rồi.

			// nếu tự return thì phải clone state đó ra
			// {...state}
		},

		setProductDetail: (state, action) => {
			state.productDetail = action.payload;
		},
	},
});

// action creator
export const { setListProduct, setProductDetail } = ProductSlice.actions;

export default ProductSlice.reducer;

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
