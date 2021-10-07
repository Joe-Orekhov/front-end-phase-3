import { useEffect, useState } from "react"

function TutorRequests() {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/tutors/1/requests")
    .then(res => res.json())
    .then(setRequests)
  }, [])

  function updateRequest(requestToUpdate) {
    setRequests(requests.map(request => request.id === requestToUpdate.id ? requestToUpdate : request))
  }

  function acceptRequestClick(request) {
    fetch(`http://localhost:9292/tutors/1/requests/${request.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({matched: true})
    })
    .then(res => res.json())
    .then(updateRequest)
  }

  const eachRequest = requests.map(request => 
      <div>
        <h2>Student Name: {request.student_id}</h2>
        <p>Subject: {request.subject}</p>
        <p>Online/In-Person: {request.online_in_person}</p>
        <p>Location: {request.location}</p>
        <p>Schedule: {request.schedule}</p>
        <button onClick={() => acceptRequestClick(request)}>Accept Request</button>
        <button>Deny Request</button>
      </div>
    )

  return(
    <div>
      <h1>Student Requests:</h1>
      {eachRequest}
    </div>
  )
}

export default TutorRequests;