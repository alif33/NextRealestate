import { getData, getDataWithReq } from '../../__lib__/helpers/HttpService';
import { filterDataSlice } from "./slice";
const { actions: slice } = filterDataSlice;

export const setFilterData = (items) => (dispatch) => {
  getDataWithReq('/properties/c', items)
    .then(response => dispatch(slice.setFilterData(response)))
}
