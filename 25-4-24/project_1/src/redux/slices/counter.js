import { createSlice } from '@reduxjs/toolkit';

export const counterSlice=createSlice(
    
    {
            name:"dummyJson",
            initialState:{       
                list:[],
                view:"",
                edit:{
                    title:"",
                    body:"",
                    userId:null
                }
            },    
            reducers:{
                create:(state,action)=>{
                    state.list=action.payload                
                }, 
                view:(state,action)=>{
                    state.view=action.payload
                },  
                update:(state,action)=>{
                    state.edit=action.payload
                    
                }            
            }
})
export const {create,view,update} = counterSlice.actions

export default counterSlice.reducer
