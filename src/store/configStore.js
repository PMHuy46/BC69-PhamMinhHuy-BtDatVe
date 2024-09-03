import { configureStore } from "@reduxjs/toolkit";
import { btDatVeReducer } from "./btDatVe/slice";

export const store = configureStore({
    reducer:{
        btDatVeReducer,
    }
})