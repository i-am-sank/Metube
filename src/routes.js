import React from 'react';
import {Route ,Switch } from 'react-router-dom';
import Hoc from './hoc/hoc'
import Homepage from './containers/Home'
import Main from './containers/Main'

const BaseRouter = () => (
    <Hoc>
        <Switch>
            <Route
            exact path = "/Main/:hash"
            render={(props) => <Main hash = {props.match.params.hash}/>}
            />

            <Route 
            exact path="/" 
            render = {(props) => <Homepage/>}
            />
        </Switch>
    </Hoc>
)

export default BaseRouter;