import './App.css'
import React, { Switch, Route } from 'react-router-dom'
import Login from "./component/login"
import TutorSchedule from './component/TutorSchedule'
import TutorProfile from './component/TutorProfile'

import React, {Switch, Route } from 'react-router-dom'

// STUDENT NAV DOES NOT BELONG HERE> BUT IT WILL LIVE HERE FOR NOW
import StudentNav from './component/StudentNavBar'
///////////////////////////////////////////////////////

import { useState } from 'react';

import TutorRequests from './component/TutorRequests'
import StudentSchedule from './component/StudentSchedule'
import StudentProfile from './component/StudentProfile'
import TutorList from './component/TutorList'


// STUDENT/TUTOR NAV DOES NOT BELONG HERE, BUT IT WILL LIVE HERE FOR NOW
import StudentNavBar from './component/StudentNavBar'
import TutorNavBar from './component/TutorNavBar'

function App() {

  const [usertype, setUsertype] = useState(0)


   return (
     <div> 
       <StudentNav />
       <Switch>
       <Route exact path="/student/schedule">
         <StudentSchedule />
        </Route>
        <Route exact path="/tutor/schedule">
         <TutorSchedule />
        </Route>
        <Route exact path="/tutor/requests">
         <TutorRequstes />
        </Route>
       <Route exact path="/">
          <Login setUsertype={setUsertype} usertype={usertype} />
        </Route>
        <Route exact path="/student/tutorList">
            <TutorList />
        </Route>
        <Route exact path="/student/profile">
            <StudentProfile />
        </Route>
        <Route exact path="/tutor/profile">
            <TutorProfile />
        </Route>
       </Switch>
    </div>
   )
}

export default App;
