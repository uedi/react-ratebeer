const beerReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_BEERS':
            return action.data
        case 'ADD_BEER':
            return [...state, action.data]
        default:
            return state
    }
}

export const setBeers = (beers) => {
    return {
        type: 'SET_BEERS',
        data: beers
    }
}

export const addBeer = (beer) => {
    return {
        type: 'ADD_BEER',
        data: beer
    }
}

export default beerReducer