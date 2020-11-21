import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Graphics from "../components/graphics";
import NavBar from "../components/NavBar";
import Dashboard from "../pages/dashbord";
import SignIn from "../pages/SignIn/Index";
import SignUp from "../pages/SignUp/Index";

const Routes: React.FC = () => (
    <BrowserRouter>
    <NavBar/>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/cadastro" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/Graficos" component={Graphics} />
        </Switch>
    </BrowserRouter>
);
export default Routes;
