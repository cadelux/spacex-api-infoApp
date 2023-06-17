import React, { useState } from 'react'
import {useEffect } from 'react'
import axios from 'axios'
import Rocket from './Rocket.js'
import './RocketList.css';
function RocketList() {
  const[rockets,setRockets]=useState([])
  const fetchRockets=async()=>{
    const response= await axios.get("https://api.spacexdata.com/v3/rockets")
    setRockets(response.data)
  }

  
useEffect(()=>{
fetchRockets()
},[])

//console.log(rockets)
  return (
    <div className='list'>
  
        {rockets.map((rocket,id)=>(
                        <div className='list'><Rocket rocket={rocket} key={id} /></div>
                    ))}
    

      
    </div>
  )
}

export default RocketList
