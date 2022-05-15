import { blogSlice } from "./slice";
const { actions: slice } = blogSlice;

export const setBlog = blog => (dispatch) => {
    dispatch(slice.setBlog(blog))
}
