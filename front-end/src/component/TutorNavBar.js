import { Link } from "react-router-dom"

function TutorNavBar() {

  return(
    <div>
      <Link to="/tutor/profile"><button>Profile</button></Link>
    </div>
  )
}

export default TutorNavBar;