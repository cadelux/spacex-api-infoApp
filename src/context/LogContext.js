import React from 'react'
import { createContext,useState} from 'react'

 const LogContext=createContext();

    export const LogProvider=({children})=>{

    const [log,setLog]=useState(false)
    const values={log,setLog};
  return (
    <LogContext.Provider value={values}>
        {children}
    </LogContext.Provider>
  )
}

export default LogContext
