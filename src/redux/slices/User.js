import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLocalStorage } from '../../utils';
import { ACCESS_TOKEN } from '../../constant';
import { axiosWithAuth } from '../../services/config.services';

const initialState = {
	userProfile: {},
};

export const getProfileThunk = createAsyncThunk(
	'UserSlice/getProfileThunk',
	async () => {
		const resp = await axiosWithAuth.post('/Users/getProfile');

		return resp;
	}
);

const UserSlice = createSlice({
	name: 'UserSlice',
	initialState,
	reducers: {
		resetUserProfile: (state, action) => {
			state.userProfile = {};
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getProfileThunk.fulfilled, (state, action) => {
			state.userProfile = action.payload.data.content;
		});
	},
});

export const { resetUserProfile } = UserSlice.actions;

export default UserSlice.reducer;
