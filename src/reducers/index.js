import {combineReducers} from "redux";
import counter from "./counting";

export default combineReducers({
    counterData: counter,
})