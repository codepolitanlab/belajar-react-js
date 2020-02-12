import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/todoAction'
import { addNote } from '../../store/actions/noteAction'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      choice: 'Todo'
    }
  }  

  onChangeHandler = (e) => {
    this.setState({ text : e.target.value })
  }

  onSubmit = () => {
    if(this.state.choice === 'Todo') {
      this.props.addTodos(this.state.text)
    } else {
      this.props.addNotes(this.state.text)
    }
    
    this.setState({ text: '' })
  }

  onClickChoice = (value) => {
    this.setState({ choice: value })
  }

  render () {
    var styleButtonTodo = ''
    var styleButtonNotes = ''
    if(this.state.choice === 'Todo') {
      styleButtonTodo = 'btn-success'
    } else {
      styleButtonNotes = 'btn-success'      
    }
    return (
      <>
        <button 
          className={`btn m-2 ${styleButtonTodo}`} 
          onClick={ () => this.onClickChoice('Todo')}
        >
          Switch to Add Todo
        </button>
        <button 
          className={`btn ${styleButtonNotes}`}
          onClick={() => this.onClickChoice('Notes')}
        >
          Switch to Add Notes
        </button>
        <p>Add {this.state.choice}</p>
        <div className="form-group">
          <input 
          value={this.state.text}
          onChange={this.onChangeHandler} type="text" className="form-control" placeholder="Type todo here" />
        </div>
        <button onClick={this.onSubmit} className="btn btn-primary">Add</button>
      </>
    )
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    addTodos: (todo) => dispatch(addTodo(todo)),
    addNotes: (note) => dispatch(addNote(note))
  }
}

export default connect(null, mapDispatchToProps)(Form)
