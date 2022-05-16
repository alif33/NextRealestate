import { combineReducers } from '@reduxjs/toolkit';
import { adminSlice } from './admins/slice';
import { userSlice } from './users/slice';
import { propertySlice } from './property/slice';
import { categorySlice } from './catrgories/slice';
import { tagSlice } from './tags/slice';
import { reviewSlice } from './reviews/slice';
import { blogSlice } from './blog/slice';
import { propertyCategorySlice } from './propertyCategory/slice';

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    property: propertySlice.reducer,
    categories: categorySlice.reducer,
    tags: tagSlice.reducer,
    reviews: reviewSlice.reducer,
    blog: blogSlice.reducer,
    selectedCategory: propertyCategorySlice.reducer
})