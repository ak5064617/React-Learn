import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CartSlice"


const Store = configureStore({
    name: "store",
    reducer: {
        cart: cardReducer
    }
})

export default Store;