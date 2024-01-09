import { createSlice } from "@reduxjs/toolkit"
export const Slice=createSlice({
    name:'values',
    initialState:{
        nombre:'prueba',
        boat_name:'none',
        spot_name:'none'
    },
    reducers:{
        changeName:(state,action)=>{
            state.nombre = action.payload;
        },
        selectFloatTo:(state,action)=>{
            state.boat_name=action.payload
        },
        selectSpotTo:(state,action)=>{
            state.spot_name=action.payload
        }
    }
})

export const {changeName,selectFloatTo,selectSpotTo}=Slice.actions