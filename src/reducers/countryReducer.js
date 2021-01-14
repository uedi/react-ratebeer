const countryReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_COUNTRIES':
            return action.data
        case 'ADD_COUNTRY':
            return [...state, action.data]
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

export const addCountry = (country) => {
    return {
        type: 'ADD_COUNTRY',
        data: country
    }
}

export default countryReducer