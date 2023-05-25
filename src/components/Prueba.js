import React, { useEffect, useState } from 'react'
import UserService from '../service/UserService'

function Prueba() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getData = async() => {
            await UserService.getAccounts().then((response) => {
                setUsers(response.data)
            })
        }  
        getData()
    }, [])

  return (
    <div>
        {
            users.map(
                user =>
                <div>
                <p>{user}</p>
                </div>
            )
        }
    </div>
    
  )
}

export default Prueba