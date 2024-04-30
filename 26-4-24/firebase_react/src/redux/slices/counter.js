import { createSlice } from '@reduxjs/toolkit';

export const counterSlice=createSlice(
    
    {
            name:"authenticationData",
            initialState:{
                isLogged:false,
                create:{}
            },
            
            reducers:{
                setCreate:(state,action)=>{
                    state.create=action.payload                
                } ,
                setIsLogged:(state,action)=>{
                    state.isLogged=action.payload
                }
                            
            }
    })
export const {setCreate,setIsLogged} = counterSlice.actions

export default counterSlice.reducer
