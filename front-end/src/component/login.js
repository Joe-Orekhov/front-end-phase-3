
function Login({ setUsertype }) {

  return(
    <div>
      <h1>LOGIN</h1>
      <button onClick={() => setUsertype(3)}>Student</button>
      <button onClick={() => setUsertype(2)}>Tutor</button>
    </div>
  )
}

export default Login;