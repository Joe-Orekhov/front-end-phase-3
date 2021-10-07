import { useEffect, useState } from "react"

function TutorRequests() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/tutors/1/requests")
    .then(res => res.json())
    .then(setRequests)
  }, [])

// need to figure out how to get student names from student_id
  const eachRequest = requests.map(request => 
      <div>
        <h4>Student Name: {request.student_id}</h4>
        <p>Subject: {request.subject}</p>
        <p>Online/In-Person: {request.online_in_person}</p>
        <p>Location: {request.location}</p>
        <p>Schedule: {request.schedule}</p>
        <button>Accept Request?</button>
      </div>
    )

  return(
    <div>
      <h1>Student Requests</h1>
      {eachRequest}
    </div>
  )
}

export default TutorRequests;