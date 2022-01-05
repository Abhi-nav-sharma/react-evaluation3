import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"

export const getDataRequest = () => ({
    type: GET_DATA_REQUEST,
    payload: {
      isLoading: true
    }
  });
  
  export const getDataSuccess = ({items,total_count}) => ({
    type: GET_DATA_SUCCESS,
    payload: {
      items,total_count
    }
  });
  
  export const getDataFailure = () => ({
    type: GET_DATA_FAILURE,
    payload: {
      isError: true
    }
  });