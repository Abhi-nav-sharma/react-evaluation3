import {useSelector } from "react-redux";
import { Redirect } from "react-router";
export default function Home(){
    const isAuth= useSelector((state)=>state.auth.isAuth)
    if(!isAuth){
        return <Redirect to='/login'/>
    }
    return(
        <div>Home</div>
    )
}