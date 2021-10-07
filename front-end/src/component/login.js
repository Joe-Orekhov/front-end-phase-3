import React, { useState, useEffect } from 'react';
// import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function Login({ setUsertype, usertype,}){

  const [ tutorUserpass, setTutorUserpass] = useState([])
  const [ tutorName, setTutorUsername] = useState([])
  const [ tutorAllUser,  setTutorAllUser ] = useState([])
  useEffect(()=>{
    fetch('http://localhost:9292/tutors')
  .then(resp => resp.json())
  .then(t =>setTutorAllUser(t))
  },[])

  const [ studentUserpass, setStudentUserPass] = useState([])
  const [ studentname, setStudentUsername] = useState([])
  const [ studentAllUser,  setStudentAllUser ] = useState([])
  useEffect(()=>{
    fetch('http://localhost:9292/students')
  .then(resp => resp.json())
  .then(t =>setStudentAllUser(t))
  },[])


  function tutorHandleSubmit (userID){
    console.log(userID)
  }
  function StudentHandleSubmit (userID){
    console.log(userID)
  }


  function DisplayLogin({ }){


    if (usertype === 1){
    
      let tutorAllLogins = tutorAllUser.map(user => ({'username': user.username, 'password': user.password, 'id': user.id}))
    
      let tutorSelectUsername = tutorAllLogins.filter(user=> user.username === tutorName)
      let tutorSelectPassword = tutorAllLogins.filter(thing=> thing.password === tutorUserpass)
    
      function tutorHandleSubmit(e){
        e.preventDefault()
    
        if(tutorSelectPassword[0] === tutorSelectUsername[0]){
          console.log("WINNER")
          
        }else{
          alert("Invalid Login")
        }
      }
      return(
        <div>
          <form onSubmit={e => tutorHandleSubmit(e)}>
            <input id="username" name="username" onChange={(e)=>setTutorUserpass(e.target.value)}></input>
            <input id="password" name="password" onChange={(e)=>setTutorUsername(e.target.value)}></input>
            <button>Student Login</button>
            </form>
        </div>
      )
    }else if (usertype === 2){

    
          let allLogins = studentAllUser.map(user => ({'username': user.username, 'password': user.password, 'id': user.id}))
    
          let StudentSelectUsername = allLogins.filter(user=> user.username === studentname)
          let StudentSelectPassword = allLogins.filter(thing=> thing.password === studentUserpass)
    
          function StudentHandleSubmit(e){
            e.preventDefault()
    
            if(StudentSelectPassword[0] === StudentSelectUsername[0]){
              console.log("WINNER")
      
            }else{
              alert("Invalid Login")
            }
          }
      return(
        <div>
          <form onSubmit={e => StudentHandleSubmit(e)}>
          <input id="username" name="username" onChange={(e)=>setStudentUserPass(e.target.value)}></input>
          <input id="password" name="password" onChange={(e)=>setStudentUsername(e.target.value)}></input>
          <button>Tutor Login</button>
          </form>
        </div>
      )
    }else{
      return <div></div>
    }
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////


  return(
    <div>
      <h1>LOGIN</h1>
      <div>
        <DisplayLogin StudentHandleSubmit={StudentHandleSubmit} tutorHandleSubmit={tutorHandleSubmit}/>
          <button onClick={() => setUsertype(1)}>Student</button>
          <button onClick={() => setUsertype(2)}>Tutor</button>
        
      </div>
    </div>
  )
}

export default Login;