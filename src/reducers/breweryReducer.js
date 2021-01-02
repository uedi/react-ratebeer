const breweryReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_BREWERIES':
            return action.data
        default:
            return state
    }
}

export const setBreweries = (breweries) => {
    return {
        type: 'SET_BREWERIES',
        data: breweries
    }
}
export default breweryReducer