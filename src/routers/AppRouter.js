import React, { useEffect, useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from '../style/theme'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import AdopcionHome from '../container/AdopcionHome'
import AddPets from '../components/AddPets'
import Navbar from '../components/Navbar'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { AuthRouter } from './AuthRouter'

const AppRouter = () => {
    const [checking, setChecking] = useState(false)
    const [isLooggedIn, setsIsLoogedIn] = useState(true)

    useEffect(() => {
        setChecking(false)

    }, [])

    if (checking) {
        return (
            <h1>Cargando ...</h1>
        )
    }
    
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Navbar />
                <Switch>

                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLooggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        component={AdopcionHome}
                        isAuthenticated={isLooggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/new"
                        component={AddPets}
                        isAuthenticated={isLooggedIn}
                    />

                    <Redirect to="/auth/login" />
                </Switch>

            </Router>
        </ChakraProvider>
    )
}

export default AppRouter
