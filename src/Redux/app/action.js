import { CHANGE_PAGE, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes"

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

  export const pageChange= (page) =>{
    return ({
        type:CHANGE_PAGE,
        payload:{
            page
        }
  })
}
  

  export const getData= (query,perPage=5,page=1) =>(dispatch) =>{
      const requestAction= getDataRequest()
      dispatch(requestAction)
      return (fetch(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${perPage}`))
      .then((res) => res.json())
      .then((res)=>{
          const successAction = getDataSuccess(res)
          dispatch(successAction);
      })
      .catch((res) => {
          console.log(res)
        const failureAction = getDataFailure()
        dispatch(failureAction);
      });
  }