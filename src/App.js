import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Beers from './components/Beers'
import Breweries from './components/Breweries'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Styles from './components/Styles'

const App = () => {
   
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/beers'>
                    <Beers />
                </Route>
                <Route path='/breweries'>
                    <Breweries />
                </Route>
                <Route path='/styles'>
                    <Styles />
                </Route>
                <Route path='/signin'>
                    <SignIn />
                </Route>
                <Route path='/signup'>
                    <SignUp />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App