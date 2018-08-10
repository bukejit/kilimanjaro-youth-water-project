import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron container-fluid">
        <h1>Kilimanjaro Water Project</h1>
        <p>Welcome to the Kilimanjaro Water Project homepage!</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
