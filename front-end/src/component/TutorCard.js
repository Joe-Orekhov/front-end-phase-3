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
      <div>
        <h2 id="tutorName">{tutor.name}</h2>
        <img id="tutorImage" src={tutor.img} alt="tutorpic" />
      </div>
        <div id="tutorInformation">
          <div>
          <p><span className='infoHeader'>Gender: </span>{tutor.gender}</p>
          <p><span className='infoHeader'>Background Check: </span>{tutor.background_check}</p>
          <p><span className='infoHeader'>Online/In-Person: </span>{tutor.online_in_person}</p>
          <p><span className='infoHeader'>Subjects: </span>{tutor.subjects}</p>
          <p><span className='infoHeader'>Location: </span>{tutor.location}</p>
          <p><span className='infoHeader'>TimeZone: </span>{tutor.timezone}</p>
          <p><span className='infoHeader'>Availability: </span>{tutor.availability}</p>
          </div>
        </div>
       <div>
      <p id="tutorBio">Bio: {tutor.bio}</p>
      <p id="tutorRate">Rate: ${tutor.rate}</p>
      </div> 
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
