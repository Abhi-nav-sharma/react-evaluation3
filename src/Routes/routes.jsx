import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Search from "../Pages/Search";

export default function Routes(){
    return(
        <>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route exact path='/search'>
                <Search/>
            </Route>
        </Switch>
        </>
    )
}