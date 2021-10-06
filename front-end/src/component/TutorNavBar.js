import { Link } from 'react-router-dom'


function TutorNavBar({ usertype }) {


  return(
    <div>
      <h1> Tutor Nav Bar</h1>
      <button><Link to="/tutor/schedule">tutor schedule</Link></button>
      <button><Link to="/tutor/profile">tutor profile</Link></button>
      <button><Link to="/tutor/requests">tutor requests</Link></button>
    </div>
  )
}

export default TutorNavBar;