import { useEffect, useState } from "react"

function TutorProfile() {
  const [ tutorInfo, setTutorInfo ] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/tutors/1/profile")
    .then(res => res.json())
    .then(setTutorInfo)
  }, [])

  return(
    <div>
      <h1>My Profile</h1>
      <h2>Name: {tutorInfo.name}</h2>
      <img src={tutorInfo.img} width="400" height="400" />
      <p>Gender: {tutorInfo.gender}</p>
      <p>Subjects: {tutorInfo.subjects}</p>
      <p>Location: {tutorInfo.location}</p>
      <p>TimeZone: {tutorInfo.timezone}</p>
      <p>Online/In-Person: {tutorInfo.online_in_person}</p>
      <p>Availability: {tutorInfo.availability}</p>
      <p>Background Check: {tutorInfo.background_check}</p>
      <p>Bio: {tutorInfo.bio}</p>
      <p>Rate: ${tutorInfo.rate}</p>
    </div>
  )
}

export default TutorProfile

