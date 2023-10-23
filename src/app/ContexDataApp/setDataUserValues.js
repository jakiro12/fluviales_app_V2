'use client'
import React,{useState,useEffect} from "react";
const DataTripComponent=React.createContext()

export const SetInformationAboutTrip =({children})=>{
    const[tripData,setTripData]=useState({
        boat_name:'',
        trip_type:'',
        start_trip:'',
        go_back_trip:'',
    })
    return(
        <DataTripComponent.Provider value={{tripData,setTripData}}>

                {children}

        </DataTripComponent.Provider>
    )
}