import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../components/Login'
import Registro from '../components/Registro'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ Registro }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}
