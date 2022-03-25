import { createSlice } from "@reduxjs/toolkit"

// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const PUSH = 'COUNTERPUSH';
const TOGGLE = 'TOGGLE';

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

export const toggle = () => {
    return {
        type: TOGGLE,
    }
}

// 초기값 설정
const initialState = {
    number: 0,
    showCounter: true,
}


// counter Reducer
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:{
            return {
                ...state,
                number: state.number + 1,
                showCounter: state.showCounter
            };
        }
        case DECREMENT: {
            return {
                ...state,
                number: state.number - 1,
                showCounter: state.showCounter
            };
        }
        case RESET:
            return {
                ...state,
                number: 0,
                showCounter: !state.showCounter
            }
        case PUSH:
            return {
                ...state,
                number: state.number + action.value,
                showCounter: state.showCounter
            }
        default:
            return state
    }
};