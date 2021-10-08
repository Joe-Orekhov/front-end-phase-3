import { useEffect, useState } from "react"
import StudentRequests from "./StudentRequests"

function StudentSchedule() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students/1/tutors")
    .then(res => res.json())
    .then(setMatches)
  },[])

function handleDeleteMatch(matchToDelete) {
  setMatches(matches.filter(match => match.id !== matchToDelete.id))
}

    // need to figure out how to get tutor names from student_id
    const eachTutor = matches.map(match =>
      <StudentRequests 
      key={match.id}
      match={match}
      handleDeleteMatch={handleDeleteMatch}
      />
      )

  return(
    <div>
      
      <h1>Student Schedule</h1>
      {eachTutor}
      
    </div>
  )
}


export default StudentSchedule;