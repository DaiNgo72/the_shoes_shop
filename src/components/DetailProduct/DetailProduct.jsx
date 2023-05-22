import React from 'react';
import './DetailProduct.scss';
import { useSelector } from 'react-redux';

function DetailProduct() {
	const { productDetail } = useSelector((state) => state.ProductReducer);
	// {....}
	return (
		<div className='detail-product'>
			<div className='detail-product-left'>
				<img src={productDetail.image} />
			</div>

			<div className='detail-product-right'>
				<h2>{productDetail.name}</h2>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		</div>
	);
}

export default DetailProduct;
