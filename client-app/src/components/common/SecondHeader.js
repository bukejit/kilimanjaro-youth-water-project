import React from 'react';
import { Link } from 'react-router-dom';
import './SecondHeader.css';

const SecondHeader = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top customNav">
    <div className="container-fluid header-container">
        <Link to="/" className="navbar-brand logo" activeClassName="active">
          <img src="http://placehold.it/300x60?text=Logo" width="150" height="30" alt="LOGO"></img>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse custBreadcrumbs" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/Home" className="navbar-brand logo" activeClassName="active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="navbar-brand logo" activeClassName="active">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="navbar-brand logo" activeClassName="active">Blogs</Link>
            </li>
            <li className="donate-button">
              <button type="button" className="btn btn-primary btn-lg">Donate</button>
            </li>
          </ul>
        </div>
    </div>
  </nav>
);

export default SecondHeader;
