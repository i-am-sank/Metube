import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Hoc from "./hoc/hoc";

const BaseRouter = () => (
    <Hoc>
        <Switch>
            <Route exact path="/" component={}/>
        </Switch>
    </Hoc>
);

export default BaseRouter;