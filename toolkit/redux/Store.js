import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Cardslice";
const store=configureStore({
    reducer:{
        card:cardReducer,
    }
})

export default store;   