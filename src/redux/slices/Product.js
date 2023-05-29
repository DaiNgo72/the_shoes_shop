// rxslice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductByIdApi } from '../../services/product.services';

const initialState = {
	listProduct: [],
	productDetail: {},
	isLoading: true,
};

export const getProductByIdThunk = createAsyncThunk(
	'ProductSlice/getProductById',
	async (id) => {
		const resp = await getProductByIdApi(id);

		return resp; // chính là action.payload
	}
);

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
	extraReducers: (builder) => {
		builder.addCase(getProductByIdThunk.pending, (state, action) => {
			// console.log(action);
			// đang call api
			state.isLoading = true;
		});

		builder.addCase(getProductByIdThunk.fulfilled, (state, action) => {
			// console.log(action);
			state.productDetail = action.payload.data.content;

			// set lại isLoading = false.
			state.isLoading = false;
		});
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

// ---------------------------------------
// tái sử dụng: call api xong, đẩy lên trên redux

// closure function. có thể sử dụng tất cả giá trị biến ở phạm vi function cha.

// Tốn 2 bước.
export const getProductByIdAction = (id) => {
	// return về function
	return async (dispatch) => {
		// middleware: thunk.
		const resp = await getProductByIdApi(id);

		const action = setProductDetail(resp.data.content);

		// dispatch: middle thunk, trả ra
		// dispatch: đẩy dữ liệu lên trên redux
		dispatch(action);
	};
};

// function callApi(b) {
// 	var b = b;
// 	const a = 10; // clear
// 	return a + 20;
// } // kết thúc thì biến "a" | "b" bị clear đi.
// console.log(callApi());

// function callApi() {
// 	const a = 10;
// 	return () => {
// 		console.log(a); // "a": không bị clear đi.
// 	};
// }

// callApi();

// IIFE: hàm gọi liền
