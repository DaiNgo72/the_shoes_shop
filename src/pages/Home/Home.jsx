import React, { useEffect } from 'react';
import axios from 'axios';
import CarouselHome from 'src/components/Carousel/Carousel';
import ListProduct from 'src/components/ListProduct/ListProduct';
import './Home.scss';

function Home() {
	const getListProduct = () => {
		axios.get('https://shop.cyberlearn.vn/api/Product');
		// lấy dữ liệu => đưa lên redux
	};

	// chỉ chạy một lần, sau khi render xong giao diện.
	useEffect(() => {
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
