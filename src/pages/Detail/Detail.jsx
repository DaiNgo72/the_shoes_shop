import React, { useEffect } from 'react';
import DetailProduct from '../../components/DetailProduct/DetailProduct';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProductByIdAction,
	getProductByIdThunk,
	setProductDetail,
} from '../../redux/slices/Product';
import CardProduct from '../../components/CardProduct/CardProduct';
import { useScrollTop } from '../../hooks/useScrollTop';
import ListProduct from '../../components/ListProduct/ListProduct';
import { Skeleton } from 'antd';

// style
import './Detail.scss'; // download file scss
import { getProductByIdApi } from '../../services/product.services';

function Detail() {
	const params = useParams();
	const dispatch = useDispatch();
	const { productDetail, isLoading } = useSelector(
		(state) => state.ProductReducer
	);

	const getProductById = async (id) => {
		try {
			// const resp = await getProductByIdApi(id);
			// const action = setProductDetail(resp.data.content);
			// dispatch(action);
			/**
			 * action:
			 * 1. {type, payload}
			 * 2. function
			 */

			// 1. thunk: Cách cũ
			// mong muốn trả về: action = function
			// const action = getProductByIdAction(id);
			// // dispatch: gọi action async.
			// dispatch(action);

			// 2. Thunk: Cách mới.
			const actionThunk = getProductByIdThunk(id);
			dispatch(actionThunk);
		} catch (err) {
			console.log(err);
			// alert('API Lỗi Rồi Nè');
		}
	};

	// chưa chạy

	// Chạy sau khi render xong hết lên trên giao diện.
	useEffect(() => {
		// chưa call api
		getProductById(params.productID);

		// Chú Ý: khi sử dụng useEffect: Trong useEffect có sử dụng những giá trị nào, thì các bạn nên truyền hết vào dependencies
	}, [params.productID]);
	// chạy: 1. mount, 2. giá trị của một dependencies

	// callBack của useEffect không được sử dụng async function.
	useEffect(() => {
		// 1. IIFE.
		(async (id, name) => {
			// id = 8, name = 'dai'
			const resp = await axios.get(
				`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
			);
		})(8, 'dai'); //IIFE

		// 2. Taọ function, sau đó gọi.
		// const fn = async (id, name) => {
		// 	// id = 8, name = 'dai'
		// 	const resp = await axios.get(
		// 		`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
		// 	);
		// };
		// fn();
	}, [params.productID]);

	if (isLoading) {
		// tạo skeleton
		return <Skeleton active />;
	}

	return (
		<div>
			<DetailProduct />
			<h3>Relate Product</h3>

			<ListProduct
				className='list-product-detail'
				listProduct={productDetail.relatedProducts}
			/>
		</div>
	);
}

export default Detail;
