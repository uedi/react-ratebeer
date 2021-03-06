import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import beerReducer from './reducers/beerReducer'
import breweryReducer from './reducers/breweryReducer'
import userReducer from './reducers/userReducer'
import styleReducer from './reducers/styleReducer'
import countryReducer from './reducers/countryReducer'

const reducer = combineReducers({
    beers: beerReducer,
    breweries: breweryReducer,
    user: userReducer,
    styles: styleReducer,
    countries: countryReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store