import { useEffect, useState } from "react"

function TutorList() {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students/tutors")
    .then(res => res.json())
    .then(setTutors)
  },[])

  const EachTutor = () => tutors.map(tutor =>
    
      <div id="tutorCard">
        <div>
          <h2 id='tutorName'>{tutor.name}</h2>
          <img id="tutorImage" src={tutor.img} alt="tutorpic"  />
        </div>
          <div id="tutorInformation">
            <div>
            <p><span className='infoHeader'>Gender:</span> {tutor.gender}</p>
            <p><span className='infoHeader'>Background Check:</span> {tutor.background_check}</p>
            <p><span className='infoHeader'>Online/In-Person:</span> {tutor.online_in_person}</p>
            <p><span className='infoHeader'>Subjects:</span> {tutor.subjects}</p>
            </div>
            <div>
            <p><span className='infoHeader'>Location:</span> {tutor.location}</p>
            <p><span className='infoHeader'>TimeZone:</span> {tutor.timezone}</p>
            <p><span className='infoHeader'>Availability:</span> {tutor.availability}</p>
            </div>
  
          </div>
        <div>
          <p id="tutorBio">{tutor.bio}</p>
          <p id="tutorRate">Rate: ${tutor.rate}</p>
        </div>
        <p>REQUEST</p>
        </div>
      
  
  )

  return(
    <div>
      <h1>Tutor List</h1>
      <div id="tutorCardHome">
        <EachTutor />
      </div>
    </div>
  )
}

export default TutorList;