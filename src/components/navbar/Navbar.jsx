import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

class Navbar extends Component {
  render() {
    return (
        <nav className="white">
            <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">Logo</Link>
            <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Sass</Link></li>
                <li><Link to="/">Components</Link></li>
                <li><Link to="/">Javascript</Link></li>
                <li><Link to="/">Mobile</Link></li>
            </ul>
            </div>
      </nav>
    );
  }
}

export default Navbar;