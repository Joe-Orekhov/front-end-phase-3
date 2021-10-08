import { useEffect, useState } from "react"
import StudentRequests from "./StudentRequests"

function StudentSchedule({ userId }) {
  const [matches, setMatches] = useState([])

  
  useEffect(() => {
    fetch(`http://localhost:9292/students/${userId}/tutors`)
    .then(res => res.json())
    .then(setMatches)
  },[])

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
    <div className="student-schedule">
      <h1>MY SCHEDULE</h1>
      {eachTutor}
    </div>
  )
}


export default StudentSchedule;