import { useState } from "react"

function TutorCard({ tutor }) {
  const [requests, setRequests] = useState([])
  const [showForm, setShowForm] = useState(false)

  function handleAddRequest(newRequest) {
    setRequests([...requests, newRequest])
  }

  function handleRequestClick() {
    setShowForm(showForm => !showForm)
  }

  function handleRequestSubmit(e) {
    e.preventDefault()
    // need to update URL to userId (passed down from App)
    fetch("http://localhost:9292/students/1/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tutor_id: tutor.id,
        // upodate student_id to userId)
        student_id: 1,
        subject: e.target.subject.value,
        schedule: e.target.schedule.value,
        online_in_person: e.target.online_in_person.value,
        location: e.target.location.value,
      })
    })
    .then(res => res.json())
    .then(handleAddRequest)
    e.target.reset()
  }

  return(
    <div id="tutorCard">
      <h2>Name: {tutor.name}</h2>
      <img id="tutorImage" src={tutor.img} alt="tutorpic" width="400" height="400" />
        <div id="tutorInformation">
          <p>Gender: {tutor.gender}</p>
          <p>Subjects: {tutor.subjects}</p>
          <p>Location: {tutor.location}</p>
          <p>TimeZone: {tutor.timezone}</p>
          <p>Online/In-Person: {tutor.online_in_person}</p>
          <p>Availability: {tutor.availability}</p>
          <p>Background Check: {tutor.background_check}</p>
        </div>
      <p id="tutorBio">Bio: {tutor.bio}</p>
      <p id="tutorRate">Rate: ${tutor.rate}</p>
      {showForm ? 
      <div>
        <button onClick={handleRequestClick}>Close Request</button>
        <form onSubmit={handleRequestSubmit, handleRequestClick}>
          <label>Subject </label>
          <input type="text" name="subject" />
          <label>Schedule </label>
          <input type="text" name="schedule" />
          <label>Online/In-Person</label>
          <select name="online_in_person">
            <option>Online</option>
            <option>In-Person</option>
            <option>Both</option>
          </select>
          <label>Location</label>
          <input type="text" name="location" />
          <button>Confirm Request</button>
        </form>
      </div>
      :
      <button onClick={handleRequestClick}>Request Tutor</button>
      }
    </div>
  )}

  export default TutorCard
