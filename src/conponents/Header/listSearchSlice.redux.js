import { createSlice } from '@reduxjs/toolkit';
import ListContactInitial from 'helper/initContact.data';

const list = createSlice({
	name: 'list',
	initialState: ListContactInitial,
	reducers: {
		saveListSearch: (state, action) => {
			let list = { ...state };
			list = action.payload;
			return list;
		},
		addToListSearch: (state, action) => {
			state.push(action.payload);
		},
	},
});

const { reducer, actions } = list;
export const { saveListSearch, addToListSearch } = actions;
export default reducer;
