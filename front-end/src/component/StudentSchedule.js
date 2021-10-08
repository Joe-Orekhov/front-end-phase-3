import { useEffect, useState } from "react"
import StudentRequests from "./StudentRequests"

function StudentSchedule({userId}) {
  const [matches, setMatches] = useState([])

  
  useEffect(() => {
    fetch(`http://localhost:9292/students/${userId}/tutors`)
    .then(res => res.json())
    .then(setMatches)
  },[userId])

function handleDeleteMatch(matchToDelete) {
  setMatches(matches.filter(match => match.id !== matchToDelete.id))
}
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