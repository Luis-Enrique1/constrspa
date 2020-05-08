import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul className="sidenav" id="mobile-demo">
        <li><Link to="/">Sass</Link></li>
        <li><Link to="/">Components</Link></li>
        <li><Link to="/">Javascript</Link></li>
        <li><Link to="/">Mobile</Link></li>
      </ul>
    );
  }
}

export default Navbar;