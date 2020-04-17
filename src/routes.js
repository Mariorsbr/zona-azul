import React from 'react';
import {BrowserRouter,Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewVehicle from './pages/NewVehicle';
import Edit from './pages/Edit';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component  ={Home} />
                <Route path="/user/edit" component  ={Edit} />
                <Route path="/user/register" component  ={Register} />
                <Route path="/user/login" component  ={Login} />
                <Route path="/getVehicles" component  ={Profile} />
                <Route path="/registerVehicle" component  ={NewVehicle} />
            </Switch>
        </BrowserRouter>
    );
}