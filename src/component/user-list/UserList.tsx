import React from 'react'
import { useAppSelector } from "../../store/store";


const UserList = () => {
    const show = useAppSelector((state) => state.user.formData);
    console.log(show,"showdata")
  return (
  
    <div>
        <h1>data</h1>{show.map((item)=>{
        return(
            <ul>
            <li>{item.id}</li>
            <li style={{color:'red'}}>{item.firstName}</li>
            <li>{item.password}</li>
            </ul>
        )
    })}</div>
  )
}

export default UserList