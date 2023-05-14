import React, { Fragment, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HomeTemplate() {
	return (
		<Fragment>
			<header
				style={{
					height: 80,
					background: 'blue',
					padding: 50,
					color: 'white',
				}}>
				<ul
					style={{
						display: 'flex',
						gap: '1rem',
					}}>
					<li>
						<NavLink
							style={{
								color: 'white',
							}}
							to={'/'}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							style={{
								color: 'white',
							}}
							to='/login'>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							style={{
								color: 'white',
							}}
							to='register'>
							Register
						</NavLink>
					</li>
					<li>
						<NavLink
							style={{
								color: 'white',
							}}
							to='profile'>
							Profile
						</NavLink>
					</li>
				</ul>
			</header>
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
