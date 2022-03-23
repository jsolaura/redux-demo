const initialState = {
    number: 0,
}

export default function addSubReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                number: state.number + action.size
            };
        case 'DECREMENT':
            return {
                ...state,
                number: state.number + action.size
            };
        case 'RESET':
            return {
                ...state,
                number: 0
            }
        default:
            return state
    }
};