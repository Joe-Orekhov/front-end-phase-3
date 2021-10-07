import { useEffect, useState } from "react"

function StudentProfile() {
  const [studentInfo, setStudentInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students/1/profile")
    .then(res => res.json())
    .then(setStudentInfo)
  }, [])

  return(
    <div>
      <h1>My Profile</h1>
      <h2>Name: {studentInfo.name}</h2>
      <img src={studentInfo.img} width="400" height="400" />
      <p>Grade: {studentInfo.grade}</p>
      <p>Age: {studentInfo.age}</p>
      <p>TimeZone: {studentInfo.timezone}</p>
    </div>
  )
}

export default StudentProfile;