
import React, { useState, useEffect } from 'react';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Login() {
  const [usertype, setUsertype] = useState(0)
  const [ userpass, setUserPass] = useState('')
  const [ username, setUsername] = useState('')
  const [ allUser,  setAllUser ] = useState([])
  // const [ dropDownOpen, setOpen ] = useState(false);
  // const toggle = () => setOpen(!dropDownOpen)

  useEffect(()=>{
      fetch('http://localhost:9292/students')
  .then(resp => resp.json())
  .then(t =>setAllUser(t))
  },[])
 
    let allLogins = allUser.map(user => ({'username': user.username, 'password': user.password, 'id': user.id}))

    let selectUsername = allLogins.filter(thing=> thing.username === username)
    let selectPassword = allLogins.filter(thing=> thing.password === userpass)

    let passID = selectPassword.map(l=> l.id)
    let userID = selectUsername.map(l=> l.id)

    console.log(passID)
    console.log(userID)

    function handleSubmit(e){
      e.preventDefault()

      if(toString(passID) === toString(userID)){
        console.log("WINNER")
      }else{
        console.log("YOU FAIL")
      }

      // allLogins.forEach(thing=> findUser(thing.username))
      // allLogins.forEach(thing=> findPass(thing.password))

      // function findUser(user){
      //   if(username === user){
      //     console.log("WIN")
      //     return true
      //   }else{
      //     console.log("fail")
      //     return false
      //   }
      // }
      // function findPass(userPassword){
      //   if(userpass === userPassword){
      //     console.log("WIN")
      //     return true
      //   }else{
      //     console.log("fail")
      //     return false
      //   }
      // }

      // console.log(findPass())
  
    }

  return(
    <div>
      <h1>LOGIN</h1>
      <div>
        {/* <ButtonDropdown isOpen={dropDownOpen} toggle={toggle}>
          <DropdownToggle caret>Login</DropdownToggle>
          <DropdownMenu>
          <DropdownItem header>HEADER</DropdownItem>
            <DropdownItem>Student</DropdownItem>
            <DropdownItem>Tutor</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown> */}

        <form onSubmit={e => handleSubmit(e)}>
          <button onClick={() => setUsertype(1)}>Student</button>
          <button onClick={() => setUsertype(2)}>Tutor</button>
          <input id="username" name="username" onChange={(e)=>setUserPass(e.target.value)}></input>
          <input id="password" name="password" onChange={(e)=>setUsername(e.target.value)}></input>
          <button>login</button>
          <button>Sign up</button>
        </form>

      </div>
    </div>
  )
}

export default Login