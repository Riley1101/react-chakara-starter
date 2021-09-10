import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import Home from './pages/home'
import theme from './utils'

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider>

    )
}

