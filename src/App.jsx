import { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';

// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
// import Detail from './pages/Detail/Detail';
// import Carts from './pages/Carts/Carts';
// import Search from './pages/Search/Search';
// import Profile from './pages/Profile/Profile';

// lazy loading: khi nào cần thì mình mới tải file js về
// code spliting; chia nhỏ từng file js

// lazy + suspense
const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Detail = lazy(() => import('./pages/Detail/Detail'));
const Carts = lazy(() => import('./pages/Carts/Carts'));
const Search = lazy(() => import('./pages/Search/Search'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
// const Profile = lazy(() => {
// 	// giả dụ: tốn 5s để tải file js
// 	return new Promise((resolve, resject) => {
// 		setTimeout(() => {
// 			resolve(import('./pages/Profile/Profile'));
// 		}, 5000);
// 	});
// });

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* element={HomeTemplate} => v5 */}
				<Route path='' element={<HomeTemplate />}>
					{/* relative */}
					{/* pathCha + pathCon => truy cập vào đúng page */}

					{/* tương tự: index={true} */}

					{/* file Home chưa tải về kịp: blank page */}
					<Route index element={<Home />} />
					{/* Không sử dụng /logn: absolute => rõ ràng pathCha+pathCon*/}
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					<Route path='carts' element={<Carts />} />
					<Route path='detail' element={<Detail />} />
					<Route path='search' element={<Search />} />
					<Route path='profile' element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
