import { useEffect, useState } from "react"
import StudentRequests from "./StudentRequests"





function TutorList() {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students/tutors")
    .then(res => res.json())
    .then(setTutors)
  },[])




  

  const eachTutor = tutors.map(tutor =>
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
      
    </div>
  )

  return(
    <div>
      <h1>Tutor List</h1>
      {eachTutor}
    </div>
  )
}

export default TutorList;