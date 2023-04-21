import React, { useEffect, useState } from 'react'
import { Image, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HeaderComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem("access_token");
    if (token){
      setIsLoggedIn(true);
    }
  },[]);

  const handleLogout = () => {
    // remove access token from local storage
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };
  return (
    <div>
        <Navbar bg="light" variant="light" className='d-flex ml-auto p-3 m-3 rounded-4 border shadow-small justify-content-between'>
            <Image src='https://inxiteout.ai/wp-content/uploads/2021/08/logo-14.png' style={{height:"40px"}}/>
            {isLoggedIn ? (
              <Link onClick={handleLogout} className='btn btn-primary rounded-4'>Sign Out</Link>
            ):(
              <Link to='/signup' className='btn btn-primary rounded-4'>Sign Up</Link>
            )}
        </Navbar>
    </div>
  )
}

export default HeaderComponent