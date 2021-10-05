import Profile from "./profile"
import Requests from "./requests"
import Schedule from "./schedule"
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom'

function Navebar() {
  return(
    <div>
      <h2>Navebar</h2>
      <BrowserRouter>
        <button><Link to='/profile'>Profile</Link></button>
        <button><Link to='/requests'>Requests</Link></button>
        <button><Link to='/schedule'>Schedule</Link></button>
        <Switch>
          <Route path='/profile'>
            <Profile />
          </Route >
          <Route path='/requests'>
            <Requests />
          </Route >
          <Route path='/schedule'>
            <Schedule />
          </Route >
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Navebar;