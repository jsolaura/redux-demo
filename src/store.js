import {createStore} from "redux";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const numberReducer = (state,action) => {
    if (!state) {
        return {
            number: 0,
        }
    }
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                number: state.number + action.size
            }
        case 'DECREMENT':
            return {
                ...state,
                number: state.number -  action.size
            }
    }
}
export const numberStore = createStore(numberReducer, enhancer);
