import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

const Index = () => (
  <BrowserRouter>
    <App>
      <Route exact path="/" component={HomePage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
    </App>
  </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
