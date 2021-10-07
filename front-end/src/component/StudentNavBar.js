import { Link } from 'react-router-dom'

function StudentNavBar({}) {


  return(
    <div>
      <h1>Student Nav Bar</h1>

        <button><Link to="/student/schedule">My Schedule</Link></button>
        <button><Link to="/student/profile">My Profile</Link></button>
        <button><Link to="/student/tutorList">Tutor List</Link></button>
    </div>
  )
}

export default StudentNavBar;