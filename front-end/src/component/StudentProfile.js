import { useEffect, useState } from "react"
import EditForm from './StudentEditForm'

function StudentProfile({userId}) {
  const [studentInfo, setStudentInfo] = useState([])
  const [editForm, setEditForm] = useState(true)
  
  useEffect(() => {
    fetch(`http://localhost:9292/students/${userId}/profile`)
    .then(res => res.json())
    .then(setStudentInfo)
  }, [userId])



  return(
    <div>
      <h1 className="profile-header">MY PROFILE</h1>
    <div class="row">
      <div class="column1">
        <h2>Name: {studentInfo.name}</h2>
        <img src={studentInfo.img} alt="studentpic" width="60%"/>
        <p>Grade: {studentInfo.grade}</p>
        <p>Age: {studentInfo.age}</p>
        <p>TimeZone: {studentInfo.timezone}</p>
      </div>

      <div class="column2">
        {editForm? <button onClick={()=> setEditForm(false)} className="edit-button">Edit Profile</button> : <div><button onClick={() =>setEditForm(true)}className="exit-button">Exit Edit</button> <EditForm studentInfo={studentInfo} userId={userId} setStudentInfo={setStudentInfo}/> </div>}
      </div>
    </div>
    </div>
  )
}

export default StudentProfile;