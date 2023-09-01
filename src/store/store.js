import { configureStore } from "@reduxjs/toolkit";
import { origenSlice } from "./mySlices";

export default configureStore({
    reducer:{
        unValor: origenSlice.reducer
    }
})