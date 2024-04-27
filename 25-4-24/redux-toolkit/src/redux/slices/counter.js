import { createSlice } from '@reduxjs/toolkit';

// creating a state in redux
export const counterSlice=createSlice({
    name:"counter",
    //default value like useState("")
    initialState:{
        value:0,
        list:[]
    },
    //functions to change state value
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        incrementByAmount:(state,action)=>{
            state.value=state.value+action.payload
        },
       
    }
})
export const { increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer

