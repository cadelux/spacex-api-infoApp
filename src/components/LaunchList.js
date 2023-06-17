import React,{useEffect, useState} from 'react'
import './LaunchList.css';
import axios from 'axios'
import Table from 'react-bootstrap/Table';

function LaunchList() {


    const[launches,setLaunches]=useState([])

    const fetchLaunches=async() =>{
        const response=await axios.get("https://api.spacexdata.com/v3/launches")
        setLaunches(response.data)
    }
    useEffect(()=>{
        fetchLaunches()

    },[])

  return (
    <div className='details'  >
      
      <h5>{"There are  : " + launches.length+" launches"}</h5>
        {launches.map((launches,id)=>(
            <div> 
            <Table responsive bordered hover>
                <thead>
                  <tr>
                    <th>Flight Number</th>
                    <th>Nationality</th>
                    <th>Rocket</th>
                    <th>Launch Year</th>
                    <th>Mission Name</th>
                    <th>Payload Type</th>
                    <th >Details</th>
                  </tr>
                </thead>

                <tbody >
                  <tr>
                    <td>{launches.flight_number}</td>
                    <td>{launches.rocket.second_stage.payloads[0].nationality}</td>
                    <td>{launches.rocket.rocket_name}</td>
                    <td>{launches.launch_year}</td>
                    <td>{launches.mission_name}</td>
                    <td>{launches.rocket.second_stage.payloads[0].payload_type}</td>
                    <td>{launches.details ? launches.details : "have not"}</td>

                  </tr>
                </tbody>
            </Table>
            </div>         
        ) )}
    </div>
  )
}

export default LaunchList
