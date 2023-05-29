import React, { useState } from 'react';
import './Register.scss';
import { Field, Formik, useFormik } from 'formik';

// useHistory: v5 => useNavigate: v6
import { useNavigate } from 'react-router-dom';
// Yup để validate.
import * as Yup from 'yup';
import axios from 'axios';

const schemaRegister = Yup.object({
	email: Yup.string().email().required('Username is required'),
	userName: Yup.string()
		.required('Username is required')
		.min(2, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
	confirmPassword: Yup.string()
		.required('Password is required')
		.oneOf([Yup.ref('password')], 'Confirm Password Must be matched') // yêu cầu password với confirmPassword giống nhau.
		.min(6, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
});

const validate = (values) => {
	const errors = {};
	if (!values.userName) {
		errors.userName = 'Required';
	} else if (values.userName.length > 15) {
		errors.userName = 'Must be 15 characters or less';
	}

	if (!values.password) {
		errors.password = 'Required';
	} else if (values.password.length > 20) {
		errors.password = 'Must be 20 characters or less';
	}
	return errors;
};

// Nếu sử dụng các component của formik (Field, ErrorMessage) thì phải bọc nó ở bên trong component <Formik> thì mới hoạt động được.

// chọn 1 trong 2 cách sử dụng.
// 1. useFormik
// 2. <Formik>

function RegisterFormik() {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			userName: '',
			password: '',
			confirmPassword: '',
			email: '',
		},

		validationSchema: schemaRegister, // sử dụng thư viện để validate

		// validate, // validate thủ công

		onSubmit: async (values) => {
			try {
				const resp = await axios.post(
					'https://shop.cyberlearn.vn/api/Users/signup',
					{
						email: values.email,
						password: values.password,
						name: values.userName,
						gender: true,
						phone: '0123456789',
					}
				);

				console.log(resp);
				// nếu đăng ký thành công thì chuyển về trang login.
				navigate('/login');
			} catch (err) {
				console.log(err);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<h1>Formik</h1>
			<div>
				<label>Email: </label>
				<input
					type='text'
					name='email'
					// value={formik.values.userName}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}
					{...formik.getFieldProps('email')}
				/>

				{/* touched: khi nào người dùng đã ghé qua field userName thì mới validate */}
				{formik.errors.email && formik.touched.email && (
					<p>{formik.errors.email}</p>
				)}
			</div>
			<div>
				<label>User Name: </label>
				<input
					type='text'
					name='userName'
					// value={formik.values.userName}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}
					{...formik.getFieldProps('userName')}
				/>

				{/* touched: khi nào người dùng đã ghé qua field userName thì mới validate */}
				{formik.errors.userName && formik.touched.userName && (
					<p>{formik.errors.userName}</p>
				)}
			</div>

			<div>
				<label>Password: </label>
				<input
					type='text'
					name='password'
					// value={formik.values.password}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}

					{...formik.getFieldProps('password')}
				/>

				{formik.errors.password && formik.touched.password && (
					<p>{formik.errors.password}</p>
				)}
			</div>

			<div>
				<label>Confirm Password: </label>
				<input
					type='text'
					name='confirmPassword'
					// value={formik.values.confirmPassword}
					// onChange={formik.handleChange}
					// onBlur={formik.handleBlur}

					{...formik.getFieldProps('confirmPassword')}
				/>

				{formik.errors.confirmPassword && formik.touched.confirmPassword && (
					<p>{formik.errors.confirmPassword}</p>
				)}
			</div>

			<button type='submit'>Submit</button>
		</form>
	);
}

export default RegisterFormik;
