import React from 'react';


function StudentRequests ( { match, handleDeleteMatch } ) {
    

function handleDeleteClick() {
    fetch(`http://localhost:9292/students/delete-match/${match.id}`, {
        method: "DELETE"
    })
        .then((r) => r.json())
        .then((data) => {
            debugger
            handleDeleteMatch(match)
        })
}

    
return (
    <div>
    <h4>Tutor Name: {match.tutor_id}</h4>
    <p>Subject: {match.subject}</p>
    <p>Online/In-Person: {match.online_in_person}</p>
    <p>Location: {match.location}</p>
    <p>Schedule: {match.schedule}</p>
    <button className="del-btn" onClick={handleDeleteClick}>
    Delete Match
    </button>
  </div>
    )

}

export default StudentRequests;