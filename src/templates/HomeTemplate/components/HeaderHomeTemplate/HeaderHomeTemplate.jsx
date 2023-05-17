// rfce
import React, { Fragment } from 'react';
import './HeaderHomeTemplate.scss';
import { NavLink } from 'react-router-dom';
// import LogoSvg from 'src/assets/imgs/logo.svg';
import SearchSvg from 'src/assets/imgs/search.svg';

// relative
// import Logo from '../../../../assets/icons/Logo';

// absolute
// import Logo from 'src/assets/icons/Logo';
// import SearchIcon from 'src/assets/icons/SearchIcon';
import { LogoIcon, SearchIcon } from 'src/assets/icons';

function HeaderHomeTemplate() {
	return (
		<Fragment>
			<header className='header-home-template'>
				<LogoIcon />
				<div className='header-nav-right'>
					<div className='header-search'>
						<img src={SearchSvg} />
						<p className='header-text-search'>Search</p>
					</div>

					<NavLink className={'header-link'} to={'/login'}>
						Login
					</NavLink>
					<NavLink className={'header-link'} to={'/register'}>
						Register
					</NavLink>
				</div>
			</header>
			<nav className='header-menu'>
				<NavLink className={'menu-item'} to='/'>
					Home
				</NavLink>
				<NavLink className={'menu-item'} to='/'>
					Men
				</NavLink>
				<NavLink className={'menu-item'} to='/'>
					Woman
				</NavLink>
				<NavLink className={'menu-item'} to='/'>
					Kid
				</NavLink>
				<NavLink className={'menu-item'} to='/'>
					Sport
				</NavLink>
			</nav>
		</Fragment>
	);
}

export default HeaderHomeTemplate;
