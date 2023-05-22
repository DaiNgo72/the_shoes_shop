import React, { useEffect } from 'react';
import axios from 'axios';
import CarouselHome from 'src/components/Carousel/Carousel';
import ListProduct from 'src/components/ListProduct/ListProduct';
import './Home.scss';
import { useDispatch } from 'react-redux';
import { setListProduct } from 'src/redux/slices/Product';

// redux cũ. tự tạo action creator
// const setListProductCreator = (payload) => {
// 	return {
// 		type: 'ProductSlice/setListProduct',
// 		payload,
// 	};
// };

function Home() {
	const dispatch = useDispatch();

	const getListProduct = async () => {
		const resp = await axios.get('https://shop.cyberlearn.vn/api/Product');

		console.log({ resp });
		// lấy dữ liệu => đưa lên redux

		const action = setListProduct(resp.data.content);

		console.log(action);

		//  cập nhật state lên trên redux, setState
		dispatch(action);

		/**
		 * dispatch({type,payload})
		 */
	};

	// chỉ chạy một lần, sau khi render xong giao diện.
	useEffect(() => {
		// chạy vào useEffect sau khi render giao diện xong.
		getListProduct();
	}, []);

	return (
		<div>
			<CarouselHome />

			<h2 className='product-feature'>Product Feature</h2>
			<ListProduct />
		</div>
	);
}

export default Home;
