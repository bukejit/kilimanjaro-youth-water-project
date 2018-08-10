import React from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron container-fluid">
        <h1>About</h1>
        <p>Here we shall display a generic overview of the Kilimanjaro Water Project</p>
        <Link to="home" className="btn btn-primary btn-lg">ET go home</Link>
      </div>
    );
  }
}

export default AboutPage;
