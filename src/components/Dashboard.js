import React, { useEffect, useState } from 'react'
import SeatMatrix from './SeatMatrix'
import SeatAvailability from './SeatAvailability'
import PriceCalculator from './PriceCalculator'
import { API_HOST } from '../API_HOST'
import axios from 'axios'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const [state,setState]=useState({bookedSeats:[]})
    const getBookedIds=async()=>{
        try {
            const token=localStorage.getItem('loginToken')
            
            const response=await axios.get(API_HOST+'/api/accounts/booked-slot-ids', {
                 headers: {
                   'authorization': `Bearer ${token}`
                 }
               })
               setState({...state,bookedSeats:response.data.bookedIds})
             
        } catch (error) {
            toast.error('something went wrong!')
        }
      

    }
    useEffect(()=>{
        getBookedIds()
    },[])
  return (
    <div className='main container'>
        <SeatMatrix bookedSeats={state.bookedSeats}/>
        <SeatAvailability/>
     

    </div>
  )
}

export default Dashboard