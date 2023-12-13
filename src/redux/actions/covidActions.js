import { getCovidData, getTotalCovidData } from "../../server/api";
import {
  FETCH_COVID_FAILURE,
  FETCH_COVID_REQUEST,
  FETCH_COVID_SUCCESS,
  FETCH_TOTAL_FAILURE,
  FETCH_TOTAL_REQUEST,
  FETCH_TOTAL_SUCCESS,
} from "../constants/covidTypes";

const action = (type, payload) => ({ type, payload });

export const fetchCovidData = (isoCode) => async (dispatch) => {
  dispatch(action(FETCH_COVID_REQUEST, null));
  const response = await getCovidData(isoCode);

  if (!response.error) {
    dispatch(action(FETCH_COVID_SUCCESS, response));
    return;
  }

  dispatch(action(FETCH_COVID_FAILURE, response.error));
  return response;
};

export const fetchTotalCovidData = () => async (dispatch) => {
  dispatch(action(FETCH_TOTAL_REQUEST, null));
  const response = await getTotalCovidData();

  if (!response.error) {
    dispatch(action(FETCH_TOTAL_SUCCESS, response));
    return;
  }

  dispatch(action(FETCH_TOTAL_FAILURE, response.error));
  return response;
};
