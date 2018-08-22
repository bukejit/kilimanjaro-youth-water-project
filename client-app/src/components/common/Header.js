import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  navBarToggleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  navLinkClick = () => {
    this.setState({
      collapsed: true,
    });
  }

  render() {
    let collapsedClass = 'kili-navbar-collapse  navbar-collapse bg-success';

    if (this.state.collapsed) {
      collapsedClass += ' collapse';
    }

    return (
      <nav className="kili-navbar navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <Link to="/" className=" kili-brand" activeClassName="active">
          <img src="http://placehold.it/300x60?text=Logo"className="kili-navbar-logo" alt="KYWP"></img>
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.navBarToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapsedClass} id="collapsibleNavbar">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/Home" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Blogs" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Blogs</NavLink>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-primary" onClick={this.navLinkClick}>Donate</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
