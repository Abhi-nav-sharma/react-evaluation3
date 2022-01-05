import { useLocation } from "react-router";
import {useEffect} from 'react'
export default function Search(){
    const location = useLocation();
    useEffect(()=>{
        const q= new URLSearchParams(location.search)
        const query= q.get('q')
        console.log(query) 
    },[])
    return(
        <div>Search</div>
    )
}