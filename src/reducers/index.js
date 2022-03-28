import { configureStore } from "@reduxjs/toolkit"
// import shipping from "./shipping"
// import accordion from "./accordion";
import counter from "./counting";
import shipping from "./shipping";
import accordion from "./accordion";

export default configureStore({
    reducer: {
        counterData: counter.reducer,
        shippingData: shipping.reducer,
        accordionData: accordion.reducer,
    }
})