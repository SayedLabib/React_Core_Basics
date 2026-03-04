import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
 
      <h1>Vite + React</h1>
      <Person></Person>
      <Device name="iPhone" type="Smartphone"></Device>

    </>
  )
}


function Device(props){
 
   const style = { color: "red", fontSize: "20px", fontWeight: "bold",

      margin: "10px", border: "2px solid orange", borderRadius: "8px"                
   };

  return(
   
   <div style={style}>
          <h3>Hi This is a Device</h3>
          <h3>Name of the device is - {props.name}</h3>
          <h3>Type of the device is - {props.type}</h3>
 

    </div>

  )

}

function Person(){

  const name = { name: "Fuad", age: 22, job: "AI Engineer"  };
  
  return(

    <h3>HI This is {name.name} an {name.job}</h3>
  );
}





export default App
