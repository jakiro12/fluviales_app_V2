import { createSlice } from "@reduxjs/toolkit"
export const Slice=createSlice({
    name:'values',
    initialState:{
        nombre:'prueba',
        boat_name:'none'
    },
    reducers:{
        changeName:(state,action)=>{
            state.nombre = action.payload;
        },
        selectFloatTo:(state,action)=>{
            state.boat_name=action.payload
        }
    }
})

export const {changeName,selectFloatTo}=Slice.actions