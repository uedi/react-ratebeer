import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Header from './components/Header'
import Beer from './components/Beer'
import Beers from './components/Beers'
import Breweries from './components/Breweries'
import Home from './components/Home'
import Countries from './components/Countries'
import Ratings from './components/Ratings'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Styles from './components/Styles'
import { setBeers } from './reducers/beerReducer'
import { setBreweries } from './reducers/breweryReducer'
import { setStyles } from './reducers/styleReducer'
import { setCountries } from './reducers/countryReducer'
import CreateBeer from './components/CreateBeer'
import CreateStyle from './components/CreateStyle'
import beersService from './services/beers'
import breweriesService from './services/breweries'
import stylesService from './services/styles'
import countriesService from './services/countries'

const App = () => {
   
    //const user = useSelector(state => state.user)
    const beers = useSelector(state => state.beers)
    const breweries = useSelector(state => state.breweries)
    const styles = useSelector(state => state.styles)
    const countries = useSelector(state => state.countries)

    const dispatch = useDispatch()

    const matchBeerRoute = useRouteMatch('/beers/:id')
    const matchedBeer = matchBeerRoute && beers
        ? beers.find(b => b.id.toString() === matchBeerRoute.params.id)
        : null
    
    useEffect(() => {
        if(!beers) {
            const initBeers = beersService.getAll()
            dispatch(setBeers(initBeers))
        }
    }, [beers, dispatch])

    useEffect(() => {
        if(!breweries) {
            const initBreweries = breweriesService.getAll()
            dispatch(setBreweries(initBreweries))
        }
    }, [breweries, dispatch])

    useEffect(() => {
        if(!styles) {
            const initStyles = stylesService.getAll()
            dispatch(setStyles(initStyles))
        }
    }, [styles, dispatch])

    useEffect(() => {
        if(!countries) {
            const initCountries = countriesService.getAll()
            dispatch(setCountries(initCountries))
        }
    }, [countries, dispatch])

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/ratings'>
                    <Ratings />
                </Route>
                <Route path='/beers/new'>
                    <CreateBeer breweries={breweries} styles={styles} />
                </Route>
                <Route path='/beers/:id'>
                    <Beer beer={matchedBeer} />
                </Route>
                <Route path='/beers'>
                    <Beers />
                </Route>
                <Route path='/breweries'>
                    <Breweries />
                </Route>
                <Route path='/countries'>
                    <Countries />
                </Route>
                <Route path='/styles/new'>
                    <CreateStyle />
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