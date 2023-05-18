import React, { Fragment, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HeaderHomeTemplate from './components/HeaderHomeTemplate/HeaderHomeTemplate';

function HomeTemplate() {
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
