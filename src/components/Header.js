import React from 'react'
import {useContext} from 'react'
import LogContext from '../context/LogContext';
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import logo from '../components/spacexlogo.png';
function Header(props) {

  const {log,setLog}=useContext(LogContext);

  function Close(){
    setLog(false);
    }

    function Open(){
      setLog(true);
    }

  return (
    <div className='header'>
      <nav className="navbar navbar-expand-sm  justify-content-between" style={{backgroundColor:" #D9CE52"}}>
        <div className="container-fluid"> 
          <ul className="navbar-nav">
          <a class="navbar-brand" href="#">
              <img src={logo} width="100" height="50" alt=""/>
      </a>
            <li className="nav-item" >
              <NavLink to={"/"} className="nav-link" style={{color:"black" }}>Rockets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/launches"} className="nav-link"  style={{color:"black"}} >Launches</NavLink>
            </li>
            <li className="nav-item log">
             { log? <button onClick={()=>Close()} className="nav-link btn btn-danger" style={{color:"white" }}>logout</button> :  <button onClick={()=>Open()} className="nav-link btn btn-success" style={{color:"white" }}>login</button>}  
            </li>
          </ul>
            
</div>

</nav>
    </div>
  )
}

export default Header
