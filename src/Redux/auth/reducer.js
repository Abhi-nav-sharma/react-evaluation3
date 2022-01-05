import { LOGIN_SUCCESS } from "./actionTypes";

const initState= {
    isAuth: false
}

export default function reducer(state=initState,action){
    switch(action.type){
        case LOGIN_SUCCESS:{
            return{
                ...state,isAuth:true
            }
        }
        default:{
            return state
        }
    }
}