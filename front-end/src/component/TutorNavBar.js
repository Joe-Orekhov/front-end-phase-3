import { Link } from "react-router-dom"
function TutorNavBar() {

  return(
    <div>
      <h3>Welcome to Red Acorn!</h3>
      <Link to="/tutor/schedule">Schedule</Link>
      <Link to="/tutor/profile">Profile</Link>
      <Link to="/tutor/requests">Student Requests</Link>
    </div>
  )
}

export default TutorNavBar;

