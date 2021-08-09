import React from 'react'
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
import Login from '../components/Login'

const AppRouter = () => {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/login"  component={Login}/>
                    <Route exact path="/pets" component={AdopcionHome}/>
                    <Route exact path="/new" component={AddPets}/>
                    <Route exact path="/" />
                </Switch>
                <Redirect to="/" />
            </Router>
        </ChakraProvider>
    )
}

export default AppRouter
