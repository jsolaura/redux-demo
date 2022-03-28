import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    coupon: 0,
}

const shipping = createSlice({
    name: 'shipping',
    initialState,
    reducers: {
        push(state) {
            state.count++;
        },
        pushByItems(state, action) {
            state.count = state.count + action.payload;
        }
    }
})

export const shippingActions = shipping.actions;

export default shipping;
