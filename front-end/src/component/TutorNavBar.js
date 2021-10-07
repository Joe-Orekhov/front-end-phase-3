import { Link } from 'react-router-dom'


function TutorNavBar({ usertype }) {


  return(
    <div>
      <h1> Tutor Nav Bar</h1>
      <button><Link to="/tutor/schedule">My Schedule</Link></button>
      <button><Link to="/tutor/profile">My Profile</Link></button>
      <button><Link to="/tutor/requests">Student Requests</Link></button>
    </div>
  )
}

export default TutorNavBar;