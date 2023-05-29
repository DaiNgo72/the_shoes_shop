import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

const schemaLogin = Yup.object({
	email: Yup.string().email().required('Username is required'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
});

function Login() {
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
