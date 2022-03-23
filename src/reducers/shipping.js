const PUSH = 'PUSH';

export const shippingPush = () => {
    return {
        type: PUSH,
    }
}

const initialState = {
    count: 0,
    coupon: 0,
}

export default function shipping(state = initialState, action) {
    switch (action.type) {
        case PUSH:
            return {
                ...state,
                count: state.count + 1,
                coupon: state.coupon
            }
        default:
            return state;
    }
};