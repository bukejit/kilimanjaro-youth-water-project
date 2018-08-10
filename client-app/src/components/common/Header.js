import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="container-fluid">
      <nav aria-label="breadcrumb" className="row">
        <div className="col-sm-8 col-md-8"></div>
        <ol className="breadcrumb col-sm-4 col-md-4">
          <li className="breadcrumb-item">
            <Link to="/" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">About</Link>
          </li>
        </ol>
      </nav>
    </div>
);

export default Header;
