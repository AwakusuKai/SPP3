import React, { useEffect } from "react";
import Header from "./header/Header";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Add from "./add/Add";
import View from "./view/View";
import Edit from "./edit/Edit";
import Delete from "./delete/Delete";
import Info from "./info/Info";
import Registration from "./autorization/Registration";
import Login from "./autorization/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user";


function App() {
    const isAuth = useSelector((state) => state.user.isAuth);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(auth());
    }, [dispatch]);

    return (
        <BrowserRouter>
        {console.log(isAuth)}
        {isAuth && <Redirect to="/view" />}
            <div className='app'>
            <Header isAuth={isAuth} />
                <div className="wrap">
                    <Switch>
                        <Route path="/add" component={Add} />
                        <Route path="/view" component={View} />
                        <Route path="/edit" component={Edit} />
                        <Route path="/delete" component={Delete} />
                        <Route path="/info" component={Info} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
