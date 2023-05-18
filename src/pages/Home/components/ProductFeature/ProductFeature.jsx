import React, { useEffect } from 'react';
import './ProductFeature.scss';
import ListProduct from '../ListProduct/ListProduct';
import axios from 'axios';

function ProductFeature() {
	const getListProduct = () => {
		axios.get('https://shop.cyberlearn.vn/api/Product');
	};

	// chỉ chạy một lần
	useEffect(() => {
		getListProduct();
	}, []);

	return (
		<div className='product-feature'>
			<h2 className='product-feature-title'>Product Feature</h2>
			<ListProduct />
		</div>
	);
}

export default ProductFeature;
