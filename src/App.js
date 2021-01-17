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
import Login from './components/Login'
import SignUp from './components/SignUp'
import Styles from './components/Styles'
import { setBeers } from './reducers/beerReducer'
import { setBreweries } from './reducers/breweryReducer'
import { setStyles } from './reducers/styleReducer'
import { setCountries } from './reducers/countryReducer'
import { setUser, removeUser } from './reducers/userReducer'
import CreateBeer from './components/CreateBeer'
import CreateStyle from './components/CreateStyle'
import CreateCountry from './components/CreateCountry'
import CreateBrewery from './components/CreateBrewery'
import beersService from './services/beers'
import breweriesService from './services/breweries'
import stylesService from './services/styles'
import countriesService from './services/countries'
import config from './utils/config'

const App = () => {
   
    const user = useSelector(state => state.user)
    const beers = useSelector(state => state.beers)
    const breweries = useSelector(state => state.breweries)
    const styles = useSelector(state => state.styles)
    const countries = useSelector(state => state.countries)

    const dispatch = useDispatch()

    const matchBeerRoute = useRouteMatch('/beers/:id')
    const matchedBeer = matchBeerRoute && beers
        ? beers.find(b => b.id.toString() === matchBeerRoute.params.id)
        : null
    
    const loggedIn = user != null

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem(config.LOCALSTORAGELOGGEDUSER)
        if(loggedUserJSON) {
            const loggedUser = JSON.parse(loggedUserJSON)
            dispatch(setUser(loggedUser))
        }
    }, [dispatch])

    useEffect(() => {
        if(!beers) {
            beersService.getAll()
            .then(initBeers => {
                dispatch(setBeers(initBeers))
            })
            .catch(error => {
                console.log('get beers error:', error.message)
            })
            
        }
    }, [beers, dispatch])

    useEffect(() => {
        if(!breweries) {
            breweriesService.getAll()
            .then(initBreweries => {
                dispatch(setBreweries(initBreweries))
            })
            .catch(error => {
                console.log('get breweries error:', error.message)
            })
        }
    }, [breweries, dispatch])

    useEffect(() => {
        if(!styles) {
            stylesService.getAll()
            .then(initStyles => {
                dispatch(setStyles(initStyles))    
            })
            .catch(error => {
                console.log('get styles error:', error.message)
            })
            
        }
    }, [styles, dispatch])

    useEffect(() => {
        if(!countries) {
            countriesService.getAll()
            .then(initCountries => {
                dispatch(setCountries(initCountries))    
            })
            .catch(error => {
                console.log('get countries error:', error.message)
            })
            
        }
    }, [countries, dispatch])

    const handleLogout = () => {
        window.localStorage.removeItem(config.LOCALSTORAGELOGGEDUSER)
        dispatch(removeUser())
    }
    
    return (
        <div>
            <Header loggedIn={loggedIn} handleLogout={handleLogout} />
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
                <Route path='/breweries/new'>
                    <CreateBrewery />
                </Route>
                <Route path='/breweries'>
                    <Breweries />
                </Route>
                <Route path='/countries/new'>
                    <CreateCountry />
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
                <Route path='/login'>
                    <Login loggedIn={loggedIn} handleLogout={handleLogout} />
                </Route>
                <Route path='/signup'>
                    <SignUp loggedIn={loggedIn} handleLogout={handleLogout} />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App