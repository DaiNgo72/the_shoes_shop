import React, { Fragment, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HeaderHomeTemplate from './components/HeaderHomeTemplate/HeaderHomeTemplate';
import { useScrollTop } from '../../hooks/useScrollTop';

function HomeTemplate() {
	// app có re-render không? app không render. nên nó không chạy lại useScrollTop
	useScrollTop();

	return (
		<Fragment>
			<HeaderHomeTemplate />
			<div
				style={{
					minHeight: '75vh',
				}}>
				{/* fallback: hiển thị trong lúc đợi component tải xong */}
				<Suspense fallback={<>Loading...</>}>
					<Outlet />
				</Suspense>
			</div>
			<footer
				style={{
					height: 80,
					background: 'black',
					padding: 50,
					color: 'white',
				}}>
				Footer
			</footer>
		</Fragment>
	);
}

export default HomeTemplate;
