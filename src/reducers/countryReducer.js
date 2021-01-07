const countryReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_COUNTRIES':
            return action.data
        default:
            return state
    }
}

export const setCountries = (countries) => {
    return {
        type: 'SET_COUNTRIES',
        data: countries
    }
}

export default countryReducer