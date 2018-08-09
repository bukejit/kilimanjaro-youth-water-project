import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

// Not sure if propTypes here are array or object.
App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
