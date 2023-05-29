import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileThunk } from '../../redux/slices/User';

function Profile() {
	const { userProfile } = useSelector((state) => state.UserReducer);
	// call api get profile
	const dispatch = useDispatch();

	useEffect(() => {
		const actionThunk = getProfileThunk();
		dispatch(actionThunk);
	}, []);
	return (
		<div>
			<div>
				<img
					src={userProfile.avatar}
					style={{
						width: 200,
						height: 200,
						borderRadius: '50%',
					}}
				/>
			</div>
			<div>
				<label>Email</label>
				<input type='text' value={userProfile.email} />
			</div>
		</div>
	);
}

export default Profile;
