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
      <div>
        <div id='triangle' ></div>
      <p id="tutorBio">{tutor.bio}</p>
      <img id="acornImage"src="https://images.vexels.com/media/users/3/219088/isolated/preview/e4315dc90cf3a5ccc2ece245e5973075-acorns-branch-hand-drawn.png" alt="Acorn"></img>
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
      {showForm ? 
      <div>
        
        <div><button id='closeForm' onClick={handleRequestClick}>X</button></div>
        <form id='requestForm' onSubmit={handleRequestSubmit, handleRequestClick}>
          <div id='requestForm'>
            <div>
              <label>Subject </label><br/>
              <input className='requestInput' type="text" name="subject" />
            </div>
            <div>
              <label>Schedule </label><br/>
              <input className='requestInput' type="text" name="schedule" />
            </div>
            <div>
              <label>Online/In-Person</label><br/>
              <select className='requestInput' name="online_in_person">
                <option>Online</option>
                <option>In-Person</option>
                <option>Both</option>
              </select>
            </div>
            <div>
              <label>Location</label><br/>
              <input className='requestInput' type="text" name="location" />
            </div>
          </div>
          <div>
            <button id="confirmRequest">Confirm Request</button>
          </div>
        </form>
      </div>
      :
      <div>
        <button id='requestTutorButt' onClick={handleRequestClick}>Request Tutor</button>
        <p id="tutorRate">Rate: ${tutor.rate}</p>
      </div>
      }
    </div>
  )}

  export default TutorCard
