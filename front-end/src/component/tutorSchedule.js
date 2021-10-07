import { useEffect, useState } from "react"

function TutorSchedule() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/tutors/1/students")
    .then(res => res.json())
    .then(setMatches)
  },[])

  // need to figure out how to get student names from student_id
  const eachStudent = matches.map(match =>
    <div>
      <h4>Student Name: {match.student_id}</h4>
      <p>Subject: {match.subject}</p>
      <p>Online/In-Person: {match.online_in_person}</p>
      <p>Location: {match.location}</p>
      <p>Schedule: {match.schedule}</p>
    </div>
    )

  return(
    <div>
      <h1>My Schedule</h1>
      {eachStudent}
    </div>
  )
}

export default TutorSchedule;