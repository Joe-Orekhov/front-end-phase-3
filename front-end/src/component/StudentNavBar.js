import { Link } from 'react-router-dom'

function StudentNavBar() {


  return(
    <div>
      <h1>Student Nav Bar</h1>
      <Link to="/"><button>Login</button></Link>
      <Link to="/sign_up"><button>Sign Up</button></Link>
      <Link to="/sign_up"><button>My Schedule</button></Link>
      <Link to="/sign_up"><button>My Profile</button></Link>
      <Link to="/sign_up"><button>Tutor List</button></Link>
    </div>
  )
}

export default StudentNavBar;