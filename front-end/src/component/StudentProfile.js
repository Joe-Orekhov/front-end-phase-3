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
      
      <h1>My Profile</h1>
      {editForm? <button onClick={()=> setEditForm(false)}>Edit Profile</button> : <div><button onClick={() =>setEditForm(true)}>Exit Edit</button> <EditForm studentInfo={studentInfo} userId={userId} setStudentInfo={setStudentInfo}/> </div> }
      <h2>Name: {studentInfo.name}</h2>
      <img src={studentInfo.img} alt="studentpic" width="400" height="400" />
      <p>Grade: {studentInfo.grade}</p>
      <p>Age: {studentInfo.age}</p>
      <p>TimeZone: {studentInfo.timezone}</p>
    </div>
  )
}

export default StudentProfile;