import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="container-fluid">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
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
