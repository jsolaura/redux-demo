import { createSlice } from "@reduxjs/toolkit"

// 초기값 설정
const initialState = {
    number: 0,
    showCounter: true,
}

const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.number++;
            if (!state.showCounter) {
                state.showCounter = true;
            }
        },
        decrement(state) {
            state.number--;
            if (state.number <= 0) {
                state.showCounter = !state.showCounter;
                state.number = 0;
            }
        },
        reset(state) {
            state.number = 0;
            state.showCounter = !state.showCounter;
        },
        push(state, action) {
            state.number = state.number + action.payload;
            state.showCounter = true;
        },
    }
});

export const counterActions = counter.actions;

export default counter;

// counter Reducer
// export default function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREMENT:{
//             return {
//                 ...state,
//                 number: state.number + 1,
//                 showCounter: state.showCounter
//             };
//         }
//         case DECREMENT: {
//             return {
//                 ...state,
//                 number: state.number - 1,
//                 showCounter: state.showCounter
//             };
//         }
//         case RESET:
//             return {
//                 ...state,
//                 number: 0,
//                 showCounter: !state.showCounter
//             }
//         case PUSH:
//             return {
//                 ...state,
//                 number: state.number + action.value,
//                 showCounter: state.showCounter
//             }
//         default:
//             return state
//     }
// };