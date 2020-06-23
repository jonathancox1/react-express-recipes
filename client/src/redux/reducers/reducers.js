const initialState = {
    recipes: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'ADD_LIKE':
            return { ...state, likes: state.likes + payload }

        case 'FETCH_DATA':
            return { ...state, recipes: payload }

        default:
            return state
    }
}
