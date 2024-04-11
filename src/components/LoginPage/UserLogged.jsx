import React, { useState } from 'react'



const UserLogged = ({user, setUser}) => {

   

   const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser()
   };

  return (
    <div>
      <header>
        <img src={
            user.gender === 'female'
            ? '/female-user.png'
            : '/male-user.svg'
        } alt="" />
      </header>
      <h2>
        {user?.firstName} {user?.lastName}
      </h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserLogged
