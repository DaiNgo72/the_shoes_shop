import React, { useState } from 'react';
import './Register.scss';

function Register() {
	const [values, setValues] = useState({
		userName: '',
		password: '',
		confirmPassword: '',
	});

	const [errors, setErrors] = useState({
		userName: '',
		password: '',
		confirmPassword: '',
	});

	// const [touched, setTouched] = useState({
	// 	userName: '',
	// 	password: '',
	// 	confirmPassword: '',
	// });

	const handleSubmit = (event) => {
		// chặn reload lại trang của thẻ form.
		event.preventDefault();

		console.log(values);
	};

	const handleChangeValue = (event) => {
		const { name, value } = event.target;

		setValues({
			...values, // giữ những giá trị cũ. đối với class thì không cần bước này
			[name]: value,
		});
	};

	const handleBlur = (event) => {
		const { value, name } = event.target;
		const newErrors = {};

		if (name === 'userName') {
			if (value === '') {
				newErrors.userName = 'Username is required';
			} else {
				newErrors.userName = '';
			}
		}

		if (name === 'password') {
			if (value === '') {
				newErrors.password = 'Password is required';
			} else {
				newErrors.password = '';
			}
		}

		if (name === 'confirmPassword') {
			if (value === '') {
				newErrors.confirmPassword = 'Confirm Password is required';
			} else {
				newErrors.confirmPassword = '';
			}
		}

		setErrors({
			...errors,
			...newErrors,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>User Name: </label>
				<input
					onBlur={handleBlur}
					onChange={handleChangeValue}
					type='text'
					name='userName'
					value={values.userName}
				/>
				{errors.userName && <p>{errors.userName}</p>}
			</div>

			<div>
				<label>Password: </label>
				<input
					onBlur={handleBlur}
					onChange={handleChangeValue}
					type='text'
					name='password'
					value={values.password}
				/>
				{errors.password && <p>{errors.password}</p>}
			</div>

			<div>
				<label>Confirm Password: </label>
				<input
					onBlur={handleBlur}
					onChange={handleChangeValue}
					type='text'
					name='confirmPassword'
					value={values.confirmPassword}
				/>
				{errors.confirmPassword && <p>{errors.confirmPassword}</p>}
			</div>

			<button type='submit'>Submit</button>
		</form>
	);
}

export default Register;
