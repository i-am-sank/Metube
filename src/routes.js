import React from 'react';
import {Route ,Switch } from 'react-router-dom';
import Hoc from './hoc/hoc'
import Homepage from './containers/Home'
import Main from './containers/Main'
import VUpload from './containers/upload'

const BaseRouter = () => (
    <Hoc>
        <Switch>
            <Route
            exact path = "/Main/:hash/:title"
            render={(props) => <Main hash = {props.match.params.hash} title = {props.match.params.title}/>}
            />
            
            <Route
            exact path = "/Main/upload"
            component = {VUpload}
            />

            <Route 
            exact path="/" 
            component = {Homepage}
            />
        </Switch>
    </Hoc>
)

export default BaseRouter;