import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { loginSuccess } from "../Redux/auth/action";
export default function Login(){
    const dispatch= useDispatch()
    const isAuth= useSelector((state)=>state.auth.isAuth)
    const handleLogin=()=>{
        const action= loginSuccess()
        dispatch(action)
    }
    if(!isAuth){
        return(
            <div>
                <h1>Login Page</h1>
                <h3>Please click on the button to login</h3>
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }
    else{
        return(
             <Redirect to='/'/>
        )
    }
}