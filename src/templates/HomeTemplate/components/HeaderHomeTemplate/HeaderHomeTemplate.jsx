import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './HeaderHomeTemplate.scss';

// đường dẫn relative
// import LogoIcon from '../../../../assets/icons/LogoIcon';
import LogoSvg from '../../../../assets/imgs/logo.svg';
import SearchSvg from 'src/assets/imgs/search.svg';

// đường dẫn absolute, điểm yếu hiện tại là chưa có gợi ý code;
// import LogoIcon from 'src/assets/icons/LogoIcon';
// import SearchIcon from 'src/assets/icons/SearchIcon';

import { SearchIcon, LogoIcon } from 'src/assets/icons';

function HeaderHomeTemplate() {
	return (
		<Fragment>
			<header className='header-home-template'>
				<LogoIcon />
				{/* <img src={LogoSvg} /> */}

				<div className='header-right'>
					{/* IconSearch */}
					{/* <SearchIcon /> */}
					<img src={SearchSvg} />
					<p className='header-search'>Search</p>

					<NavLink className={'header-link'} to={'/login'}>
						Login
					</NavLink>
					<NavLink className={'header-link'} to={'/register'}>
						Register
					</NavLink>
				</div>
			</header>
			<nav className='menu-home-template'>
				<NavLink className={'menu-link'} to={'/'}>
					Home
				</NavLink>
				<NavLink className={'menu-link'} to={'/'}>
					Man
				</NavLink>
				<NavLink className={'menu-link'} to={'/'}>
					Woman
				</NavLink>
				<NavLink className={'menu-link'} to={'/'}>
					Kid
				</NavLink>
				<NavLink className={'menu-link'} to={'/'}>
					Sport
				</NavLink>
			</nav>
		</Fragment>
	);
}

export default HeaderHomeTemplate;
