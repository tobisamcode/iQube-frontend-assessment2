import {
  FETCH_COVID_FAILURE,
  FETCH_COVID_REQUEST,
  FETCH_COVID_SUCCESS,
} from "../constants/covidTypes";

const initialState = {
  loading: true,
  error: "",
  covidData: null,
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case FETCH_COVID_SUCCESS:
      return {
        loading: false,
        covidData: action.payload,
        error: "",
      };

    case FETCH_COVID_FAILURE:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default covidReducer;
