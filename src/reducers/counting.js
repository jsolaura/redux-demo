
// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const PUSH = 'PUSH';

// Action Creator
export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const reset = () => {
    return {
        type: RESET,
    }
}

export const push = () => {
    return {
        type: PUSH,
    }
}


// 초기값 설정
const initialState = {
    number: 0,
}

// counter Reducer
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                number: state.number + 1,
            };
        case DECREMENT:
            return {
                number: state.number - 1,
            };
        case RESET:
            return {
                number: initialState
            }
        case PUSH:
            return {
                number: state.number + 1
            }

        default:
            return state
    }
};