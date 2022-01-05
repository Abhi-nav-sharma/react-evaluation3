import { useLocation } from "react-router";
import {useEffect,useState} from 'react'
import { changeLimit, getData, pageChange } from "../Redux/app/action";
import { useDispatch, useSelector } from "react-redux";
const Card= ({name,full_name,html_url,language,owner})=>{
    return <div style={{
        justifyContent:'center',
        border: "1px solid black",
        padding: "1rem",
        margin:'10px 0'
      }}>
        <div>
        <div>Repository Name: {name}</div>
        <div>Repository URL: {html_url}</div>
        <div>Owner ID: {owner.login}</div>
        <div>Languages: {language}</div>
      </div>
    </div>
}
const Pagination = ({ totalPages, currentPage, onClickCallback }) => {
    const pages = new Array(totalPages).fill(0).map((a, i) =>
      i + 1 === currentPage ? (
        <button disabled style={{ background: "blue" }} key={i}>
          {i + 1}
        </button>
      ) : (
        <button onClick={() => onClickCallback(i + 1)} key={i}>
          {i + 1}
        </button>
      )
    );
    return <div style={{ display: "flex", gap: "1rem", flexWrap:'wrap' }}>{pages}</div>;
  };
export default function Search(){
    const data= useSelector((state)=>state.app.data)
    const isLoading= useSelector((state)=>state.app.isLoading)
    const isError= useSelector((state)=>state.app.isError)
    const pageNo= useSelector((state)=>state.app.pageNo)
    const totalPages= useSelector((state)=>state.app.totalPages)
    const perPage= useSelector((state)=>state.app.perPage)
    const location = useLocation();
    const dispatch= useDispatch()
    const [state,setState]= useState(0)
    useEffect(()=>{
        const q= new URLSearchParams(location.search)
        const query= q.get('q')
        dispatch(getData(query,perPage,pageNo))
    },[pageNo])
    const handlePageChange = (value) => {
        console.log(value)
        dispatch(pageChange(value))
        const q= new URLSearchParams(location.search)
        const query= q.get('q')
        dispatch(getData(query,perPage,pageNo))
      };

    const handleLimit=()=>{
        dispatch(changeLimit(state))
        const q= new URLSearchParams(location.search)
        const query= q.get('q')
        dispatch(getData(query,perPage,1))
    }
    return(
        <div>
            {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
        <label>Enter result limit per page: </label>
        <input type='number' value={state} onChange={(e)=>{setState(e.target.value)}}/>
        {state>0?<button onClick={handleLimit}>Change</button>:<button onClick={handleLimit} disabled>Change</button>}
        
        <h1>Results</h1>
          {data.map((item) => (
            <Card
              key={item.id}
              full_name={item.full_name}
              name={item.name}
              html_url={item.html_url}
              language={item.language}
              owner={item.owner}
            />
          ))}
          <Pagination
            currentPage={pageNo}
            onClickCallback={handlePageChange}
            totalPages={totalPages}
          />
          </>
      )}
        </div>
    )
}