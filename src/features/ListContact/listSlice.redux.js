import { createSlice } from '@reduxjs/toolkit';
import ListContactInitial from 'helper/initContact.data';
const list = createSlice({
	name: 'list',
	initialState: ListContactInitial,
	reducers: {
		saveList: (state, action) => {
			var list = { ...state };
			list = action.payload;
			return list;
		},
		addToList: (state, action) => {
			state.push(action.payload);
		},
	},
});

const { reducer, actions } = list;
export const { saveList, addToList } = actions;
export default reducer;
