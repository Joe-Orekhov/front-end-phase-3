import React, { useState } from 'react';
import Login from "./login"
import Navebar from './navBar';
import Navbar from "./navBar"


function Main(){

  const [usertype, setUsertype] = useState(0)
  
  return(
    <div>
      <h1>Main</h1>
      <Login setUsertype={setUsertype}/>
      <Navebar usertype={usertype}/>
    </div>
  )
}

export default Main;