import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AddPets from '../components/AddPets'
import EditPets from '../components/EditPets'

export const PetsRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/new"
                        component={ AddPets }
                    />

                    <Route 
                        exact
                        path="/edit/:name/:id"
                        component={ EditPets }
                    />

                    <Redirect to="/" />

                </Switch>
            </div>

        </div>
    )
}
