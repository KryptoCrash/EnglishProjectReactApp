import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from '../pages/welcome/welcome'
import Research from '../pages/research/research'
const Main = props => (
    <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/welcome' component={Welcome}/>
        <Route exact path='/research' component={Research}/>
    </Switch>
);
export default Main;

