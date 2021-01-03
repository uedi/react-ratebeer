import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Header from './components/Header'
import Beer from './components/Beer'
import Beers from './components/Beers'
import Breweries from './components/Breweries'
import Home from './components/Home'
import Ratings from './components/Ratings'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Styles from './components/Styles'
import { setBeers } from './reducers/beerReducer'

const App = () => {
   
    const beers = useSelector(state => state.beers)
    const dispatch = useDispatch()

    const matchBeerRoute = useRouteMatch('/beers/:id')
    const matchedBeer = matchBeerRoute && beers
        ? beers.find(b => b.id.toString() === matchBeerRoute.params.id)
        : null
    
    useEffect(() => {
        if(!beers) {
            const newBeers = [
                { id: 1, name: 'beer1', brewery: { id: 1, name: 'brewery1' }, style: { id: 1, name: 'style1' }, rating: 5.0 },
                { id: 2, name: 'beer2', brewery: { id: 1, name: 'brewery1' }, style: { id: 1, name: 'style1' }, rating: 4.4 },
                { id: 3, name: 'beer3', brewery: { id: 1, name: 'brewery1' }, style: { id: 1, name: 'style1' }, rating: 3.3 },
                { id: 4, name: 'beer4', brewery: { id: 1, name: 'brewery1' }, style: { id: 1, name: 'style1' }, rating: 2.0 }
            ]
            dispatch(setBeers(newBeers))
        }
    }, [beers, dispatch])

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/ratings'>
                    <Ratings />
                </Route>
                <Route path='/beers/:id'>
                    <Beer beer={matchedBeer}/>
                </Route>
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