import {combineReducers} from "redux";
import counter from "./counting";
import shipping from "./shipping"
import accordion from "./accordion";
export default combineReducers({
    counterData: counter,
    shippingData: shipping,
    accordionData: accordion,
})