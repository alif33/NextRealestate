import { getData } from '../../__lib__/helpers/HttpService';
import { reviewSlice } from "./slice";
const { actions: slice } = reviewSlice;

export const setReviews = () => (dispatch) => {
  getData('/reviews')
    .then(response => dispatch(slice.setReviews(response)))
}
