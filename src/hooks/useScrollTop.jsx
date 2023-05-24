// function bình thường.

import { useEffect } from 'react';

// custom hooks: tại vì trong này mình có thể sử dụng những hooks của react. useState, useEffect,...
// use + name:
export const useScrollTop = () => {
	useEffect(() => {
		// khi người dùng thay đổi sản phẩn thì scroll lại lên trên đầu.

		// document.documentElement: html
		// document.body: body
		document.documentElement.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [location.href]);
};

// đây là function bình thường vì không sử dụng hook của react.
// const callTotal = (a, b) => {
// 	return a + b;
// };
