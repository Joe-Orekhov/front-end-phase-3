import React, { useState, useEffect } from 'react';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Login({handleUserID}) {
  const [ userpass, setUserPass] = useState('')
  const [ username, setUsername] = useState('')
  const [ allUser,  setAllUser ] = useState([])


  useEffect(()=>{
      fetch('http://localhost:9292/students')
  .then(resp => resp.json())
  .then(t =>setAllUser(t))
  },[])
 
    let allLogins = allUser.map(user => ({'username': user.username, 'password': user.password, 'id': user.id}))

    let selectUsername = allLogins.filter(thing=> thing.username === username)
    let selectPassword = allLogins.filter(thing=> thing.password === userpass)

console.log(selectUsername)
      function handleSubmit(e){
        e.preventDefault()

        if(selectUsername[0] === selectPassword[0]){
          handleUserID(selectUsername[0].id)
          console.log(selectUsername[0].id)
        }else{
          alert("Invalid Login")
        }

    }
  return(
    <div >
      <h1 id="loginHeader">LOGIN</h1>
      <div id="loginForm">
        <form onSubmit={e => handleSubmit(e)}>
          <input className="logFormUser" name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}></input><br/>
          <input className="logFormPass" name="password" placeholder="Password" onChange={(e)=>setUserPass(e.target.value)}></input><br/>
          <button className="logFormButt">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;