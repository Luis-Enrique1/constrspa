import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css'
import './navbar.css'

class Navbar extends Component {
  componentDidMount() {
    var element = document.querySelectorAll('.sidenav')
    M.Sidenav.init(element)
  }

  render() {
    return (
        <nav className="white">
            <div className="nav-wrapper container">
            <Link to="/" className="brand-logo">Logo</Link>
            <Link to="##" data-target="mobile-demo" className="sidenav-trigger">E</Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/about">Acerca de Nosotros</Link></li>
            </ul>
            </div>

          {/* sidenav */}
          <ul className="sidenav" id="mobile-demo">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/">Contacto</Link></li>
            <li><Link to="/">Acerca de Nosotros</Link></li>
          </ul>


      </nav>
    );
  }
}

export default Navbar;