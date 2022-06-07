import React, { Fragment } from 'react'
import Start from "../pages/start/Start"
import Main from "../pages/main/Main"
import AccessDenied from "../pages/access-denied/AccessDenied"
import PrivateRoute from '../utils/PrivateRoute';
import { BrowserRouter as Router, Routes as Switch, Route, Link, useLocation } from "react-router-dom";

const Routes = () => {
    return (

        <Fragment>
            <Switch>
                <Route path="/" exact element={
                    <PrivateRoute>
                        <Start />
                    </PrivateRoute>
                } />
                <Route path="/m" exact element={
                    <PrivateRoute>
                        <Main />
                    </PrivateRoute>
                } />

                <Route path="/access-denied" element={<AccessDenied />} />
            </Switch>
        </Fragment>


    )
}

export default Routes