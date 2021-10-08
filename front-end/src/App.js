import './App.css'
import React, { Switch, Route } from 'react-router-dom'
import Login from "./component/login"
import TutorProfile from './component/TutorProfile'
import TutorRequests from './component/TutorRequests'
import StudentSchedule from './component/StudentSchedule'
import StudentProfile from './component/StudentProfile'
import TutorList from './component/TutorList'
import SignUp from './component/SignUp'

// STUDENT/TUTOR NAV DOES NOT BELONG HERE, BUT IT WILL LIVE HERE FOR NOW
import StudentNavBar from './component/StudentNavBar'
// import TutorNavBar from './component/TutorNavBar'

function App() {

  const userId = localStorage.getItem('userID');

   return (
     <div> 
      <StudentNavBar />
      {/* <TutorNavBar /> */}
      <Switch>

        <Route exact path="/"><Login /></Route>
        <Route exact path="/sign_up"><SignUp /></Route>
        <Route exact path="/tutor/profile"><TutorProfile /></Route>
        <Route exact path="/tutor/requests"><TutorRequests /></Route>
        <Route exact path="/student"><StudentSchedule userId={userId} /></Route>
        <Route exact path="/student/profile"><StudentProfile userId={userId} /></Route>
        <Route exact path="/student/tutorlist"><TutorList userId={userId} /></Route>
      </Switch>
    </div>
   )
}

export default App;