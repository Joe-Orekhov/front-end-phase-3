import './App.css'
import { Route } from "react-router-dom"
import TutorProfile from "./component/TutorProfile"
import TutorSchedule from "./component/TutorSchedule"
import TutorRequests from "./component/TutorRequests"
// import Login from "./component/Login"
import TutorNavBar from "./component/TutorNavBar"

function App() {
   return (
     <div> 
        {/* <Switch> */}
          {/* <Route exact path="/login"><Login /></Route> */}
          <TutorNavBar />
          <Route exact path="/tutor/schedule"><TutorSchedule /></Route>
          <Route exact path="/tutor/profile"><TutorProfile /></Route>
          <Route exact path="/tutor/requests"><TutorRequests /></Route>
        {/* </Switch> */}
    </div>
   )
}

export default App;
