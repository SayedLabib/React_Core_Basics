import { useState } from "react"


export default function Counter(){
   
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    const handleClick2 = () => {
        setCount(count - 1)
    }

    return(
        <div style={{'border':'1px solid lime-green', 'borderRadius':'8px', 'padding':'10px', 'width':'200px', 'margin':'10px auto'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleClick2}>Decrement</button>
        </div>
    )
}