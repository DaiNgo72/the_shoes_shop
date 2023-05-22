import React from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../CardProduct/CardProduct';
import './ListProduct.scss';

function ListProduct() {
	// tracking, theo dõi xem có cập nhật state hay không.
	// thay listProduct có thay đổi, component ListProduct: sẽ render lại

	// render lại.
	const rs = useSelector((state) => state.ProductReducer);
	const { listProduct } = rs;
	// 1. array rỗng.

	// 2. array(19), dữ liệu mới nhất
	return (
		<div className='list-product'>
			{listProduct.map((product) => {
				return <CardProduct key={product.id} product={product} />;
			})}
		</div>
	);
}

export default ListProduct;
