import React from 'react';

function StudentRequests ( { request, handleDeleteRequest } ) {
    

function handleDeleteClick(){
    fetch(`http://localhost:9292/tutors/delete_request/${request.id}`, {
        method: "DELETE"
       
    })
        .then((r) => r.json())
        .then(() => console.log(request))

    }

    


return (
    <div>
    <h4>Student Name: {request.student_id}</h4>
        <p>Subject: {request.subject}</p>
        <p>Online/In-Person: {request.online_in_person}</p>
        <p>Location: {request.location}</p>
        <p>Schedule: {request.schedule}</p>
        <button>Accept Request?</button>
        <button className="del-btn" onClick={() => handleDeleteClick(request)}>
        Delete Tutor
        </button>
    </div>
)

}

export default StudentRequests;