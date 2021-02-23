//Home, Campanies, Companies/handle, Jobs, Login, Signup, Profile

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Company from './Company';
import Companies from './Companies';
import Jobs from './Jobs';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';



function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/companies/:handle'>
                    <Company />
                </Route>

                <Route exact path='/companies'>
                    <Companies />
                </Route>

                <Route exact path='/jobs'>
                    <Jobs />
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/signup'>
                    <Signup />
                </Route>

                <Route exact path='/profile'>
                    <Profile />
                </Route>

            </Switch>
        </div>
    )
}

export default Routes;