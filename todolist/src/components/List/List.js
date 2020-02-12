import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextAndForm from './TextAndForm'

class List extends Component {
  render (){
    return (
      <ul className="list-group">
        {this.props.todos.map((todo, index) => (
          <li key={index} className="list-group-item container">

              <TextAndForm
                todo={todo}
                index={index}
              />

          </li>
        ))}
      </ul>
    )    
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
