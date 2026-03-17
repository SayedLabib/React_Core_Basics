import { useEffect, useState } from "react"

export default function Users(){
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    )
}


/**
 * declare a usetate to hold the data of users
 * useEffect to fetch the data of users from an api and update the state
 */