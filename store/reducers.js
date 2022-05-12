import { combineReducers } from '@reduxjs/toolkit';
import { adminSlice } from './admins/slice';
import { userSlice } from './users/slice';
import { propertySlice } from './property/slice';
import { categorySlice } from './catrgories/slice';
import { tagSlice } from './tags/slice';

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    property: propertySlice.reducer,
    categories: categorySlice.reducer,
    tags: tagSlice.reducer
})