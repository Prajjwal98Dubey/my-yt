import { createSlice } from "@reduxjs/toolkit";

const dataSlice= createSlice({
    name:'data',
    initialState:{
        items:[]
    },
    reducers:{
         addToItems:(state,action)=>{
            state.items=action.payload
         }
    }

})
export const{addToItems}=dataSlice.actions
export default dataSlice.reducer