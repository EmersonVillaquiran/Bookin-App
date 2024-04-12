import React, { useState } from 'react'
import './styles/UserLogged.css'



const UserLogged = ({user, setUser}) => {

   

   const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser()
   };

  return (
    <div className='logged'>
      <header className='logged-header'>
        <img className='logged-img' src={
            user.gender === 'female'
            ? '/female-user.png'
            : '/male-user.svg'
        } alt="" />
      </header>
      <h2 className='logged-name'>
        {user?.firstName} {user?.lastName}
      </h2>
      <button className="card-btn" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserLogged
