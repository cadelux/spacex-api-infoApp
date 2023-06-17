import React from 'react'
import './RocketJS.css';
import {Accordion,Button,Card} from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function Rocket(props) {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button className='outlinenone'
        type="button"
        style={{ backgroundColor: 'rgb(50, 69, 93)'}}
        onClick={decoratedOnClick}
    
      >
        {children}
      </button>
    );
  }

  return (
 
   <Accordion className='one-rocket'  >
         <Card>
      <CustomToggle eventKey="0">

      <h3 style={{color:"white"}}>{props.rocket.rocket_name} </h3>

        <img className='imh' src={props.rocket.flickr_images[1]} style={{width:"420px"}} height={300} /> 
        </CustomToggle>
      
        <Accordion.Collapse eventKey="0" >
          <Card.Body>
      
        <h5>{props.rocket.rocket_name} Features</h5>
        {<hr></hr>}
        <div className='desc'>
        <h5 style={{fontSize:"19px"}}>{props.rocket.description}</h5>
        <h5 style={{fontSize:"19px"}}>Country: {props.rocket.country}</h5>
        <h5 style={{fontSize:"19px"}}>First Flight: {props.rocket.first_flight}</h5>
        <h5 style={{fontSize:"19px"}}>Cost. Per. Launch: {props.rocket.cost_per_launch}$</h5>

        </div>
        {<hr></hr>}
        <a href={props.rocket.wikipedia} target='_blank' >Wikipedia</a>
        <br></br>
        is active? : {props.rocket.active ? 'active' : 'active'}
      
        {<hr></hr>}
        <Accordion >
          <Card>
          <CustomToggle eventKey="0">
 
      <Button variant='success'>Details</Button>
      </CustomToggle>
      <Accordion.Collapse eventKey="0" >
        <Card.Body className='detailscard'>
  
              height: {props.rocket.height.feet}
                { <br></br>}
                {'engine type: '   + props.rocket.engines.type}
                
                { <br></br>}
                payload 1 weight: {props.rocket.payload_weights[0] ? props.rocket.payload_weights[0].name+' - '+ props.rocket.payload_weights[0].kg +' kg'  : 'nothing'}
                { <br></br>}
                payload 2 weight: {props.rocket.payload_weights[1] ? props.rocket.payload_weights[1].name+' - '+ props.rocket.payload_weights[1].kg +' kg'  : 'nothing'}
                { <br></br>}
                payload 3 weight: {props.rocket.payload_weights[2] ? props.rocket.payload_weights[2].name+' - '+ props.rocket.payload_weights[2].kg +' kg'  : 'nothing'}  
                {<br></br>}
                <h5 style={{fontSize:"14px"}}>Stages: {props.rocket.stages}</h5>
  
                <h5 style={{fontSize:"14px"}}>Boosters {props.rocket.boosters}</h5>
           
                <h5 style={{fontSize:"14px"}}>Meters:  {props.rocket.diameter.meters}m. and {props.rocket.diameter.feet} ft.</h5>
           
                <h5 style={{fontSize:"14px"}}>Mass: {props.rocket.mass.kg} kg.</h5>

                <h5 style={{fontSize:"14px"}}>Payoload : {props.rocket.second_stage.payloads.option_1} </h5>

</Card.Body>
          </Accordion.Collapse>
          </Card>
          </Accordion>
  
        </Card.Body>
        
      </Accordion.Collapse>
      
      </Card>
      </Accordion>
   
    
              
    
  
  )
  }

export default Rocket
