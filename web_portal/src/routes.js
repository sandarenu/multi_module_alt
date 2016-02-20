import React, { PropTypes, Component } from 'react';
import { Route, Redirect } from 'react-router';

import Main from './Main/Main';

import AnonymousView from './Anonymous/AnonymousView';


export default (

    <Route>
        <Redirect from="/" to="/anon" />

        <Route name="home" path="/" component={Main}>
                <Route name="anonUser" path="anon" component={AnonymousView}/>

        </Route>

        <Redirect from="*" to="/anon"/>
    </Route>
);