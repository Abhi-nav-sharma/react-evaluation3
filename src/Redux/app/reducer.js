import { CHANGE_PAGE, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";

const initState = {
    data: [],
    isLoading: true,
    isError: false,
    totalPages:0,
    perPage:5,
    pageNo:1
  };
  
  export default function reducer(state = initState, action) {
      switch(action.type){
          case GET_DATA_REQUEST:{
              return{
                  ...state,isLoading:true,isError:false
              }
          }
          case GET_DATA_SUCCESS:{
              return{
                  ...state,data:action.payload.items,isLoading:false,isError:false,totalPages:Math.ceil(action.payload.total_count/state.perPage)
              }
          }
          case GET_DATA_FAILURE:{
            return{
                ...state,isLoading:false,isError:true
            }
          }

          case CHANGE_PAGE:{
              return{
                  ...state,pageNo:action.payload.page
              }
          }

          default:{
              return{
                  ...state
              }
          }
      }
  }