import Student from "./student"
import Tutor from "./tutor"
import { Switch, Link, Route, BrowserRouter } from 'react-router-dom'

function Login() {
  return(
    <div>
      <h1>LOGIN</h1>
      <BrowserRouter>
        <button><Link to ='/student'>Student</Link></button>
        <button><Link to ='/tutor'>Tutor</Link></button>
        <Switch>
          <Route path='/student'>
            <Student />
          </Route >
          <Route path='/tutor'>
            <Tutor />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Login;