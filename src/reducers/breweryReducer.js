const breweryReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_BREWERIES':
            return action.data
        case 'ADD_BREWERY':
            return [...state, action.data]
        default:
            return state
    }
}

export const setBreweries = breweries => {
    return {
        type: 'SET_BREWERIES',
        data: breweries
    }
}

export const addBrewery = brewery => {
    return {
        type: 'ADD_BREWERY',
        data: brewery
    }
}

export default breweryReducer