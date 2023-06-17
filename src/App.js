
import './App.css';
import RocketList from './components/RocketList';
import LaunchList from "./components/LaunchList";
import Header from './components/Header';
import Footer from './components/Footer';
import React,{useContext} from 'react'
import LogContext from './context/LogContext';
import { BrowserRouter , Route, Routes } from 'react-router-dom'

function App() {

  const {log,setLog}=useContext(LogContext);
  
    
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>

    {log?
    <Routes>
 
      <Route path='/' element={<RocketList/>}/>
      <Route path='/launches' element={<LaunchList/>}/>
    </Routes>
    : <h4 style={{textAlign:"center",paddingBottom:"200px", marginTop:"250px"}} >Please login.</h4>}
    <Footer/>
    </BrowserRouter>
    </div>
    

  ); 
}

export default App;
