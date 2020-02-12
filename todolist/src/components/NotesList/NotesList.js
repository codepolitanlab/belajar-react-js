import React, { Component } from 'react'
import { connect } from 'react-redux'

class NotesList extends Component {
  render (){
    return (
      <div>
        <p>Notes</p>
        <ul className="list-group">
          {this.props.notes.map((note, index) => (
            <li key={index} className="list-group-item container">
              {note}
            </li>
          ))}
        </ul>
      </div>
    )    
  }
}

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes
  }
}

export default connect(mapStateToProps, null)(NotesList)
