const styleReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_STYLES':
            return action.data
        case 'ADD_STYLE':
            return [...state, action.data]
        default:
            return state
    }
}

export const setStyles = (styles) => {
    return {
        type: 'SET_STYLES',
        data: styles
    }
}

export const addStyle = (style) => {
    return {
        type: 'ADD_STYLE',
        data: style
    }
}

export default styleReducer