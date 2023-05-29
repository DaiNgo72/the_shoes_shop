import axios from 'axios';
import { getLocalStorage } from '../utils';
import { ACCESS_TOKEN } from '../constant';

const BASE_URL = 'https://shop.cyberlearn.vn/api';

// Những api nào cần auth cần đăng nhập, private
export const axiosWithAuth = axios.create({
	baseURL: BASE_URL,
	timeout: 180_000, // 3 phút.
});

// nó sẽ chạy cái này trước khi gọi api
axiosWithAuth.interceptors.request.use(
	(config) => {
		// thêm vào header trước khi gọi api
		config.headers = {
			Authorization: `Bearer ${getLocalStorage(ACCESS_TOKEN)}`,
		};

		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);
