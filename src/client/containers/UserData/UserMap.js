import React, { Component } from 'react';
import './userMap.css'
const UserMap = ({userData})=>{
  return (
    <ul className="user_main">
      {
        userData.map((user, index)=>(
          <li key={index} className="user">
          	<img src={user.avatar} />
          	<p>{user.first_name} {user.last_name}</p>
          	<p>{user.email}</p>
          </li>
          ))
        
      }
    </ul>
    )
}

export default UserMap;

