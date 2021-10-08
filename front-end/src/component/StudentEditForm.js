
const EditForm = ({studentInfo, userId, setStudentInfo}) => {

  const handleNewForm = (event) => {
    event.preventDefault();

        const updatedObj = {
          name: event.target.name.value,
          img: event.target.img.value,
          grade: event.target.grade.value,
          age: parseInt(event.target.age.value),
          timezone: event.target.timezone.value,
      }
      console.log(updatedObj)
    fetch(`http://localhost:9292/students/${userId}/profile-edit`, {
      method: "PATCH",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedObj)
      })      
      .then(resp => resp.json())
      .then(setStudentInfo)
      event.target.reset()
  }
  console.log(studentInfo)


  return(
    <div>
      <form className="edit-profile-form"onSubmit={handleNewForm}>
        <p>Name:</p>
        <input className="edit-profile-input" type="text" name="name" ></input><br/>
        <p>Image:</p>
        <input className="edit-profile-input" type="text"  name="img" ></input><br/>
        <p>Grade:</p>
        <input className="edit-profile-input" type="text" name="grade" ></input><br/>
        <p>Age:</p>
        <input className="edit-profile-input" type="number"  name="age" ></input><br/>
        <p>TimeZone:</p>
        <input className="edit-profile-input" type="text" name="timezone" ></input><br/>
        <button type="submit" className="edit-form-submit-bttn">submit</button>
      </form>

    </div>
  )
}

export default EditForm;