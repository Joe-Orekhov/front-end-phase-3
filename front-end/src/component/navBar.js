import Profile from "./profile"
import Requests from "./requests"
import Schedule from "./schedule"

function Navebar() {
  return(
    <div>
      <h2>Navebar</h2>
      <Profile />
      <Requests />
      <Schedule />
    </div>
  )
}

export default Navebar;