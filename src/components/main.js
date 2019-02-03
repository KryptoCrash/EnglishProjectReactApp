import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from '../pages/welcome/welcome'
import Research from '../pages/research/research'
import Conclusion from "../pages/conclusion/conclusion";
import Bibliography from "../pages/bibliography/bibliography";

const Main = props => (
    <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/welcome' component={Welcome}/>
        <Route exact path='/research' component={Research}/>
        <Route exact path='/conclusion' component={Conclusion}/>
        <Route exact path='/bibliography' component={Bibliography}/>
    </Switch>
);
export default Main;

