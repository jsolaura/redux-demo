import {combineReducers} from "redux";
import counter from "./counting";
import shipping from "./shipping"
export default combineReducers({
    counterData: counter,
    shippingData: shipping,
})