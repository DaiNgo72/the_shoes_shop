import React, { useEffect } from 'react';
import DetailProduct from '../../components/DetailProduct/DetailProduct';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetail } from '../../redux/slices/Product';
import CardProduct from '../../components/CardProduct/CardProduct';

function Detail() {
	const params = useParams();
	const dispatch = useDispatch();
	const { productDetail } = useSelector((state) => state.ProductReducer);
	// productDetail = {}
	// không có state của product để render ra giao diện.

	// tự call api, để lấy lại state.
	const getProductById = async (id) => {
		// Đợi call api xong thì đẩy lên trên redux
		const resp = await axios.get(
			`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
		);

		console.log('call api', resp);

		// Đẩy lên trên redux;
		const action = setProductDetail(resp.data.content);
		dispatch(action);
	};

	// chưa chạy

	// Chạy sau khi render xong hết lên trên giao diện.
	useEffect(() => {
		// chưa call api
		getProductById(params.productID);

		// Chú Ý: khi sử dụng useEffect: Trong useEffect có sử dụng những giá trị nào, thì các bạn nên truyền hết vào dependencies
	}, [params.productID]);

	return (
		<div>
			<DetailProduct />
			<h3>Relate Product</h3>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '5rem',

					padding: '5rem 10rem',
				}}>
				{/* ?. : option chaining */}
				{/* nếu bị null, undefined thì không chạy nữa */}
				{productDetail.relatedProducts &&
					productDetail.relatedProducts.map((product) => {
						return <CardProduct product={product} key={product.id} />;
					})}

				{/* {productDetail.relatedProducts?.map((product) => {
					return <CardProduct product={product} key={product.id} />;
				})} */}
			</div>
		</div>
	);
}

export default Detail;
