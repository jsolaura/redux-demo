const TOGGLE = 'TOGGLE';

export const toggle = () => {
    return {
        type: TOGGLE,
    }
}
const initialState = {
    accordion: false,
}
export default function accordion(state = initialState, action) {
    switch (action.type) {
        case TOGGLE:
            return {
                ...state,
                accordion: !state.accordion,
            }
        default:
            return state
    }
};