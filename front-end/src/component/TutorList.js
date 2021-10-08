import { useEffect, useState } from "react"

import TutorCard from "./TutorCard"


function TutorList() {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students/tutors")
    .then(res => res.json())
    .then(setTutors)
  },[])




  

  const eachTutor = tutors.map(tutor =>

    <TutorCard 
      tutor={tutor}
      key={tutor.id}
    />
  )

  return(
    <div>
      <h1>Tutor List</h1>
      <div id="tutorCardHome">
        {eachTutor}
      </div>
    </div>
  )
}

export default TutorList;