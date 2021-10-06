import Login from "./login";
import {Link} from 'react-router-dom'


function StudentNavebar({ usertype }) {


  return(
    <div>
      <h1>STUDENT NAV</h1>
        <button><Link to="/">login</Link></button>

        <button><Link to="/student/schedule">student schedule</Link></button>
        <button><Link to="/student/profile">student profile</Link></button>
        <button><Link to="/student/tutorList">student tutor list</Link></button>

        <button><Link to="/tutor/schedule">tutor schedule</Link></button>
        <button><Link to="/tutor/profile">tutor Profile</Link></button>
        <button><Link to="/tutor/requests">tutor requests</Link></button>
    </div>
  )
}

export default StudentNavebar;