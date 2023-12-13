import {
  FETCH_REGION_FAILURE,
  FETCH_REGION_REQUEST,
  FETCH_REGION_SUCCESS,
} from "../constants/regionTypes";

const initialState = {
  loading: true,
  error: "",
  regionData: null,
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGION_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case FETCH_REGION_SUCCESS:
      return {
        regionData: action.payload,
        loading: false,
        error: "",
      };

    case FETCH_REGION_FAILURE:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default regionReducer;
