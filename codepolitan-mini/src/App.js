import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' 

import Home from './pages/Home'
import Premium from './pages/Premium'
import DevSchool from './pages/DevScool'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="#">Codepolitan</Link>
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/premium">Premium</Link>
                <Link className="nav-item nav-link" to="/devschool">DevSchool</Link>
              </div>
          </nav>
          <div style={{ paddingTop: 60}}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/premium" component={Premium}></Route>
            <Route path="/devschool" component={DevSchool}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
