import { useLocation } from "react-router";

export default function Search(){
    const location = useLocation();
    console.log(location);
    return(
        <div>Search</div>
    )
}