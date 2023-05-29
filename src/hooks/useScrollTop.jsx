// function bình thường.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// custom hooks: tại vì trong này mình có thể sử dụng những hooks của react. useState, useEffect,...
// use + name:

// Chú ý: Khi hooks chạy lại, thì nơi nào sử dụng hooks thì nơi đó cũng re-render lại.
export const useScrollTop = () => {
	const location = useLocation(); // Khi nào mà url thay đổi, thì nó sẽ chạy là cái hooks này.

	useEffect(() => {
		// khi người dùng thay đổi sản phẩn thì scroll lại lên trên đầu.

		// document.documentElement: html
		// document.body: body
		document.documentElement.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [location]);
};

// đây là function bình thường vì không sử dụng hook của react.
// const callTotal = (a, b) => {
// 	return a + b;
// };
