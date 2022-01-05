import { useLocation } from "react-router";
import {useEffect} from 'react'
import { getData } from "../Redux/app/action";
import { useDispatch, useSelector } from "react-redux";
const Card= ({name,full_name,html_url,language,owner})=>{
    return <div style={{
        justifyContent:'center',
        border: "1px solid black",
        padding: "1rem"
      }}>
        <div>
        <div>Repository Name: {name}</div>
        <div>Owner URL: {html_url}</div>
        <div>Languages: {language}</div>
      </div>
    </div>
}
export default function Search(){
    const data= useSelector((state)=>state.app.data)
    const isLoading= useSelector((state)=>state.app.isLoading)
    const isError= useSelector((state)=>state.app.isError)
    const location = useLocation();
    const dispatch= useDispatch()
    console.log(data)
    console.log(isError)
    useEffect(()=>{
        const q= new URLSearchParams(location.search)
        const query= q.get('q')
        dispatch(getData(query,5,1))
    },[])
    return(
        <div>
            {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {data.map((item) => (
            <Card
              key={item.id}
              full_name={item.full_name}
              name={item.name}
              html_url={item.html_url}
              language={item.language}
            />
          ))}
          </>
      )}
        </div>
    )
}