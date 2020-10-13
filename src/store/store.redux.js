import { configureStore } from '@reduxjs/toolkit';
import listContact from 'features/ListContact/listSlice.redux';
import listSearch from 'conponents/Header/listSearchSlice.redux';
const rootReduce = {
	listContact: listContact,
	listSearch: listSearch,
};
const store = configureStore({
	reducer: rootReduce,
});

export default store;
