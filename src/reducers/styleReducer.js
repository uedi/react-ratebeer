const styleReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_STYLES':
            return action.data
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

export default styleReducer