import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand ms-5 ">ETracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto mx-auto ">
          <li className="navbar-item">
          <Link to="/" className="nav-link me-3">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link me-3">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link me-3">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}