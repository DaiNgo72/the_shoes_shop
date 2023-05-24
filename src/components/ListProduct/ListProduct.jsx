import React from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../CardProduct/CardProduct';

// import kiểu module.
import css from './ListProduct.module.scss';
import { mergeClassName } from '../../utils';

// SOLID:
// Single-responsibility principle: Đảm nhiệm một nhiệm vụ duy nhất

// nhiệm vụ: render list danh sách sản phẩm
// ( X ): Không có nhiệm vụ show ra UI làm sao hết - vd như margin-bottom.
function ListProduct(props) {
	const { listProduct, style, className } = props;

	// <div className={css.ListProduct}> ( X )
	return (
		<div className={mergeClassName(css.ListProduct, className)} style={style}>
			{Array.isArray(listProduct) &&
				listProduct.map((product) => {
					return <CardProduct key={product.id} product={product} />;
				})}
		</div>
	);
}

export default ListProduct;
