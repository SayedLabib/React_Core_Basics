import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './users'
import Friends from './Friends'


function App() {



 function handleClick() {
  alert('Button clicked!')
}

const handleClick3 = (num) => {
  alert(num + 2)
}
  return (
    <>

      <h3 style={{ 
        color: 'LightSeaGreen',
       }}>React Core Concepts Part 2</h3>
      
         <Friends></Friends>
        
        <Users></Users>
       <Counter>  </Counter>


       <button onClick={handleClick} style={{
        background:'Lightblue',
        border:'none',
        borderCollapse:'collapse',
        cursor:'pointer',
        borderRadius:'8px',

       }}>Click Here</button>

       <button onClick={()=> alert('Button 2 clicked!')} style={{
        background:'Lightcoral',
        border:'none',
        borderCollapse:'collapse',
        cursor:'pointer',
        borderRadius:'8px',
       }}>Click 2</button>
      
      <button onClick={() => handleClick3(5)} >Click 3</button>
    </>
  )
}

export default App
