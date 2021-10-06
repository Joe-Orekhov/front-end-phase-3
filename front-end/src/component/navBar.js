import Login from "./login";


function Navebar({ usertype }) {

  function DisplayNavBar(){
    if (usertype === 1){
      return(
        <h1 id="student_navbar"> STUDENT</h1>
      )
    }else if (usertype === 2) {
      return(
        <h1 id="tutor_navbar"> TUTOR </h1>
      )
    } else {
      return(
        <h1 id="student_navbar"> Somthing is very wrong</h1>
      )
    }
  }


  return(
    <div>
      <DisplayNavBar />
  
    </div>
  )
}

export default Navebar;