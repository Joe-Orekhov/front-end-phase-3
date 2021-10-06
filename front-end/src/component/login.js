import React from "react"
import { Link } from 'react-router-dom'

function Login() {

  return(
    <div>
      <h1>LOGIN</h1>
      <h3>Tutor Log In</h3>
      <Link to="/tutor/schedule"><button>Test</button></Link>
    </div>
  )
}

export default Login;