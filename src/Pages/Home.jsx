import {useState} from 'react';
import {useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
export default function Home(){
    const isAuth= useSelector((state)=>state.auth.isAuth)
    const [state,setState]= useState('')
    const history= useHistory()
        
    const handleSearch=()=>{
        const url= `/search?q=${state}`
        history.push(url)
    }
    if(!isAuth){
        return <Redirect to='/login'/>
    }

    return(
        <div>
            <h1>Home</h1>
            <input placeholder='Enter Repository Name' value={state} onChange={(e)=>{setState(e.target.value)}}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}