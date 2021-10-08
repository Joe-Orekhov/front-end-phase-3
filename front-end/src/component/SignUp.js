import { useState } from "react"

function SignUp() {
  const [signups, setSignUps] = useState([])

  function handleAddSignUp(newSignUp) {
    setSignUps([...signups, newSignUp])
  }

  function handleSignUpSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/student_sign_up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.target.name.value,
        grade: e.target.grade.value,
        age: e.target.age.value,
        timezone: e.target.timezone.value,
        username: e.target.username.value,
        password: e.target.password.value,
        img: e.target.img.value
      })
    })
    .then(res => res.json())
    .then(handleAddSignUp)
    e.target.reset()
  }

  return(
    <div className="sign-up">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSignUpSubmit} className="sign-up-form">
        <label>Name </label>
        <input className="sign_up_form_input" type="text" name="name" placeholder="Name..." />
        <label>Grade </label>
        <select className="sign_up_form_input" name="grade">
          <option>Pre-K</option>
          <option>Kindergarten</option>
          <option>First</option>
          <option>Second</option>
          <option>Third</option>
          <option>Fourth</option>
          <option>Fifth</option>
          <option>Sixth</option>
          <option>Seventh</option>
          <option>Eighth</option>
          <option>Ninth</option>
          <option>Tenth</option>
          <option>Eleventh</option>
          <option>Twelth</option>
          <option>College Freshman</option>
          <option>College Sophomore</option>
          <option>College Junior</option>
          <option>College Senior</option>
          <option>Post Grad</option>
          <option>Bootcamp</option>
        </select>
        <label>Age </label>
        <input className="sign_up_form_input" type="text" name="age" placeholder="Age..." />
        <label>TimeZone </label>
        <select className="sign_up_form_input" name="timezone">
          <option>PST</option>
          <option>MST</option>
          <option>CST</option>
          <option>EST</option>
        </select>
        <label>Username </label>
        <input className="sign_up_form_input" type="text" name="username" placeholder="Username..." />
        <label>Password </label>
        <input className="sign_up_form_input" type="text" name="password" placeholder="Password..." />
        <label>Your Photo </label>
        <input className="sign_up_form_input" type="text" name="img" placeholder="Image URL..." />
        <button className="sign-up-form-button">Create Account</button>
      </form>
    </div>
  )
}

export default SignUp