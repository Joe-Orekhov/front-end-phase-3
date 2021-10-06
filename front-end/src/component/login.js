import { useState } from 'react';

function Login({ setUsertype }) {

  
  const [usertype, setUsertype] = useState(0)

  return(
    <div>
      <h1>LOGIN</h1>
        <button onClick={() => setUsertype(1)}>Student</button>
        <button onClick={() => setUsertype(2)}>Tutor</button>

    </div>
  )
}

export default Login;