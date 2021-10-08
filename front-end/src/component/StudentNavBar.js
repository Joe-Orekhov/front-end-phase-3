import { Link } from 'react-router-dom'

function StudentNavBar() {

 
  return(

    <div className="navbar">
      <Link to="/"><button className="nav-tab">Login</button></Link>
      <Link to="/sign_up"><button className="nav-tab">Sign Up</button></Link>
      <Link to="/student/schedule"><button className="nav-tab">My Schedule</button></Link>
      <Link to="/student/profile"><button className="nav-tab">My Profile</button></Link>
      <Link to="/student/tutorlist"><button className="nav-tab">Tutor List</button></Link>

    </div>
  )
}

export default StudentNavBar;