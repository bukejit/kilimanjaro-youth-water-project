import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SecondHeader from './common/SecondHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SecondHeader />
        <div className="push">
        { this.props.children }
        </div>
      </div>
    );
  }
}

// Not sure if propTypes here are array or object.
App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
