import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({ app: appReducer,auth: authReducer });

export const store= createStore(rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk))

    console.log(store.getState())