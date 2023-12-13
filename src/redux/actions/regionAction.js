import { getRegionData } from "../../server/api";
import {
  FETCH_REGION_FAILURE,
  FETCH_REGION_REQUEST,
  FETCH_REGION_SUCCESS,
} from "../constants/regionTypes";

const action = (type, payload) => ({ type, payload });

export const fetchRegionData = () => async (dispatch) => {
  dispatch(action(FETCH_REGION_REQUEST, null));
  const response = await getRegionData();

  if (!response.error) {
    dispatch(action(FETCH_REGION_SUCCESS, response));
    return;
  }

  dispatch(action(FETCH_REGION_FAILURE, response));
  return response;
};
