import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    accordion: false,
}

const accordion = createSlice({
    name: 'accordion',
    initialState,
    reducers: {
        toggle(state) {
            state.accordion = !state.accordion;
        }
    }
})

export const accordionActions = accordion.actions;

export default accordion;