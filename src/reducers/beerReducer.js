const beerReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_BEERS':
            return action.data
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

export default beerReducer