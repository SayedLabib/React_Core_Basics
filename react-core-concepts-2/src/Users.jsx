import { useEffect, useState } from "react"

export default function Users(){
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h3>Users: {users.length}</h3>

        </div>
    )
}


/**
 * declare a usetate to hold the data of users
 * useEffect to fetch the data of users from an api and update the state
 * use fetch for load data
 * display the data on the DOM
 */