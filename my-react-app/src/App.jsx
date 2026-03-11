import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import ActorsInfo from './ActorsInfo'


function App() {
 
  // This is a String Array of Actors
  const actors = ['Tom Hanks', 'Leonardo DiCaprio', 'Meryl Streep', 'Will Smith', 'Scarlett Johansson'];

//  Now, we will use an array of Objects to store the actors' information

  const actorsInfo = [
   
    {name: 'Tom Hanks', age: 65, profession: 'Actor'},
    {name: 'Leonardo DiCaprio', age: 47, profession: 'Actor'},
    {name: 'Meryl Streep', age: 72, profession: 'Actress'},
    {name: 'Will Smith', age: 53, profession: 'Actor'},
    {name: 'Scarlett Johansson', age: 36, profession: 'Actress'},

  ];


  return (
    <>
 
      <h1>Vite + React</h1>

      {
        actorsInfo.map(actor => <ActorsInfo actorsInfo={actor}></ActorsInfo>)
      }

      <Actor name="Tom Hanks"></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Person></Person>
      <Device name="iPhone" type="Smartphone"></Device> */}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Finish Project" isDone={false}></Todo>
      <Todo task="Learn JavaScript" isDone={true}></Todo> */}

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
