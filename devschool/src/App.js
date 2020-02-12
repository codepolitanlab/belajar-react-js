import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Members from './components/Members/Members';
import Form from './components/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      first_name: '',
      last_name: '',
      buttonDisabled: false,
      formStatus: 'create',
      memberIdSelected: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://reqres.in/api/users?page=1')
      .then(response => {
        this.setState({ members: response.data.data });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  inputOnchangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.setState({ buttonDisabled: true });
    var payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };

    // url untuk form create
    var url = 'https://reqres.in/api/users';
    if (this.state.formStatus === 'create') {
      this.addMember(url, payload);
    } else {
      // url untuk form edit
      url = `https://reqres.in/api/users/${this.state.memberIdSelected}`;
      this.editMember(url, payload);
    }
  };

  addMember = (url, payload) => {
    axios
      .post(url, payload)
      .then(response => {
        var members = [...this.state.members];
        members.push(response.data);
        this.setState({ members, buttonDisabled: false, first_name: '', last_name: '' });
      })
      .catch(error => {
        console.log(error);
      });
  };

  editMember = (url, payload) => {
    axios
      .put(url, payload)
      .then(response => {
        var members = [...this.state.members];
        var indexMember = members.findIndex(member => member.id === this.state.memberIdSelected);

        // mengganti data yang ada dalam state members dan index yang sesuai
        members[indexMember].first_name = response.data.first_name;
        members[indexMember].last_name = response.data.last_name;
        this.setState({
          members,
          buttonDisabled: false,
          first_name: '',
          last_name: '',
          formStatus: 'create',
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  editButtonHandler = member => {
    this.setState({
      first_name: member.first_name,
      last_name: member.last_name,
      formStatus: 'edit',
      memberIdSelected: member.id,
    });
  };

  deleteButtonHandler = id => {
    var url = `https://reqres.in/api/users/${id}`;
    axios
      .delete(url)
      .then(response => {
        if (response.status === 204) {
          var members = [...this.state.members];
          var index = members.findIndex(member => member.id === id);
          members.splice(index, 1);
          this.setState({ members });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1>Codepolitan DevSchool</h1>
        <div className="row">
          <div className="col-6" style={{ border: '1px solid black' }}>
            <h2>Member</h2>
            <div className="row">
              {/* USE THIS CODE BEFORE USING COMPONENT <Members />
            { this.state.members.map((member) => (
              <div className="col-md-6" key={member.id}>
                <div className="card" style={{ margin: 10}}>
                  <div className="card-body">
                  <h5 className="card-title">{member.id}</h5>
                    <h5 className="card-title">{member.first_name}</h5>
                    <h5 className="card-title">{member.last_name}</h5>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => this.editButtonHandler(member)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-danger"
                      onClick={() => this.deleteButtonHandler(member.id)}  
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))} */}

              <Members
                members={this.state.members}
                editButtonClick={member => this.editButtonHandler(member)}
                deleteButtonClick={id => this.deleteButtonHandler(id)}
              />
            </div>
          </div>

          <div className="col-6" style={{ border: '1px solid black' }}>
            <h2>Form {this.state.formStatus}</h2>

            {/* USE THIS CODE BEFORE USING COMPONENT <Form />
            <form onSubmit={this.onSubmitHandler}>
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.inputOnchangeHandler}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  name="last_name"
                  value={this.state.last_name} 
                  onChange={this.inputOnchangeHandler}
                />
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={this.state.buttonDisabled}
              >
                Submit
              </button>
            </form> */}
            <Form
              onSubmitForm={this.onSubmitHandler}
              onChange={this.inputOnchangeHandler}
              first_name={this.state.first_name}
              last_name={this.state.last_name}
              buttonDisabled={this.state.buttonDisabled}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
