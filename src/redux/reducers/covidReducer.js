import {
  FETCH_COVID_FAILURE,
  FETCH_COVID_REQUEST,
  FETCH_COVID_SUCCESS,
  FETCH_TOTAL_FAILURE,
  FETCH_TOTAL_REQUEST,
  FETCH_TOTAL_SUCCESS,
} from "../constants/covidTypes";

const initialState = {
  loading: true,
  error: "",
  covidData: null,

  totalLoading: true,
  totalError: "",
  totalCovidData: null,
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",

        totalLoading: false,
        totalError: "",
        totalCovidData: null,
      };

    case FETCH_COVID_SUCCESS:
      return {
        loading: false,
        covidData: action.payload,
        error: "",

        totalLoading: false,
        totalError: "",
        totalCovidData: action.payload,
      };

    case FETCH_COVID_FAILURE:
      return {
        ...state,

        totalLoading: false,
        totalError: "",
        totalCovidData: null,
      };

    case FETCH_TOTAL_REQUEST:
      return {
        ...state,

        totalLoading: true,
        totalError: "",
        totalCovidData: null,
      };

    case FETCH_TOTAL_SUCCESS:
      return {
        ...state,

        totalLoading: false,
        totalError: "",
        totalCovidData: action.payload,
      };

    case FETCH_TOTAL_FAILURE:
      return {
        ...state,

        totalLoading: false,
        totalError: "",
        totalCovidData: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default covidReducer;
