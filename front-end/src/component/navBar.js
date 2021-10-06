

function Navebar({ usertype }) {

  function DisplayNavBar(){
    if (usertype === 0){
      return(
        <h1> NO_ONE</h1>
      )
    }else if (usertype === 2) {
      return(
        <h1> TUTOR</h1>
      )
    } else {
      return(
        <h1> STUDENT</h1>
      )
    }
  }


  return(
    <div>
      <h2>Navebar</h2>
      <DisplayNavBar />
  
    </div>
  )
}

export default Navebar;