import React from 'react'

const member = (props) => (
    <div className="col-md-6" key={props.member.id}>
        <div className="card" style={{ margin: 10}}>
        <div className="card-body">
            <h5 className="card-title">{props.member.id}</h5>
            <h5 className="card-title">{props.member.first_name}</h5>
            <h5 className="card-title">{props.member.last_name}</h5>
            <button 
                className="btn btn-primary" 
                onClick={() => props.editButtonClick(props.member)}
            >
                Edit
            </button>
            <button 
                className="btn btn-danger"
                onClick={() => props.deleteButtonClick(props.member.id)}  
            >
                Delete
            </button>
        </div>
        </div>
    </div>
)

export default member