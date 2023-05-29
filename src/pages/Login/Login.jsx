import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { saveLocalStorage } from '../../utils';
import { ACCESS_TOKEN } from '../../constant';
import { useNavigate } from 'react-router-dom';

const schemaLogin = Yup.object({
	email: Yup.string().email().required('Username is required'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
});

function Login() {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},

		validationSchema: schemaLogin,

		onSubmit: async (values) => {
			try {
				console.log({ values });
				// call api login
				const resp = await axios.post(
					'https://shop.cyberlearn.vn/api/Users/signin',
					{
						password: values.password,
						email: values.email,
					}
				);
				console.log({ resp });

				// lưu vào storage
				saveLocalStorage(ACCESS_TOKEN, resp.data.content.accessToken);

				navigate('/profile');
				// public: ai cũng có thể gọi được hết.

				// private: cần phải xác định được danh tính bạn là ai thì mới được phép gọi những api đó.

				// tạo thẻ từ: chứa tất cả thông tin của các bạn.

				// accessToken: dựa vào đây để xem thử bạn có được phép gọi những api đó hay không.
				// redux. mỗi lần reload page => mất.
				// localStrogate. => không bị mất mỗi lần reload page.
			} catch (err) {
				console.log(err);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<div>
				<label>Email</label>
				<input type='text' name='email' {...formik.getFieldProps('email')} />
				{formik.errors.email && formik.touched.email && (
					<p>{formik.errors.email}</p>
				)}
			</div>
			<div>
				<label>Password</label>
				<input
					type='text'
					name='password'
					{...formik.getFieldProps('password')}
				/>
				{formik.errors.password && formik.touched.password && (
					<p>{formik.errors.password}</p>
				)}
			</div>

			<button type='submit'>Login</button>
		</form>
	);
}

export default Login;
