import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import dataSlice from "./dataSlice";

const store = configureStore({
    reducer:{
         chat:chatSlice,
         data:dataSlice
              
    }
})

export default store