import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="push">
        { this.props.children }
        </div>
      </div>
    );
  }
}

// Not sure if propTypes here are array or object.
App.propTypes = {
  children: PropTypes.array.isRequired,
};

export default App;
