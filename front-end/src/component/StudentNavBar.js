import { Link } from 'react-router-dom'

function StudentNavBar({ usertype }) {


  return(
    <div>
      <h1>Student Nav Bar</h1>

        <button><Link to="/student/schedule">student schedule</Link></button>
        <button><Link to="/student/profile">student profile</Link></button>
        <button><Link to="/student/tutorList">student tutor list</Link></button>
    </div>
  )
}

export default StudentNavBar;