import './App.css'
import React, { Switch, Route } from 'react-router-dom'
import Login from "./component/login"
import TutorSchedule from './component/TutorSchedule'
import TutorProfile from './component/TutorProfile'
import TutorRequests from './component/TutorRequests'
import StudentSchedule from './component/StudentSchedule'
import StudentProfile from './component/StudentProfile'
import TutorList from './component/TutorList'

// STUDENT NAV DOES NOT BELONG HERE> BUT IT WILL LIVE HERE FOR NOW
import StudentNavBar from './component/StudentNavBar'
import TutorNavBar from './component/TutorNavBar'

function App() {
   return (
     <div> 
      <StudentNavBar />
      <TutorNavBar />
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/student/schedule"><StudentSchedule /></Route>
        <Route exact path="/tutor/schedule"><TutorSchedule /></Route>
        <Route exact path="/tutor/requests"><TutorRequests /></Route>
        <Route exact path="/student/tutorList"><TutorList /></Route>
        <Route exact path="/student/profile"><StudentProfile /></Route>
        <Route exact path="/tutor/profile"><TutorProfile /></Route>
      </Switch>
    </div>
   )
}

export default App;
