import { useEffect, useState } from "react"

function StudentSchedule() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students/1/tutors")
    .then(res => res.json())
    .then(setMatches)
  },[])

    // need to figure out how to get tutor names from student_id
    const eachTutor = matches.map(match =>
      <div>
        <h4>Tutor Name: {match.tutor_id}</h4>
        <p>Subject: {match.subject}</p>
        <p>Online/In-Person: {match.online_in_person}</p>
        <p>Location: {match.location}</p>
        <p>Schedule: {match.schedule}</p>
      </div>
      )


  return(
    <div>
      
      <h1>Student Schedule</h1>
      {eachTutor}
    </div>
  )
}

export default StudentSchedule;