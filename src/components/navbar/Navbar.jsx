import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css'
import './navbar.css'
import icon from './icon.png'

class Navbar extends Component {
  componentDidMount() {
    let location = window.location.href;

    if(location === 'http://localhost:3000/') {
      document.querySelectorAll('#link').forEach(element => {
        if (element.style !== "color:white!important") {
          element.style = "color:white!important"
        }
      })
    } else {
      document.querySelectorAll('#link').forEach(element => {
        if (element.style === "color:white!important") {
          element.style = ""
        }
      })
    }

    var element = document.querySelectorAll('.sidenav')
    M.Sidenav.init(element)

    document.addEventListener("scroll", () => {
      let location = window.location.href;
      if (window.scrollY > 100) {
        document.querySelectorAll('#link').forEach(element => {
          if (element.style !== "") {
            element.style = ""
          }
        })
        const nav = document.getElementById('nav')
        if(nav.className !== '') {
          nav.className = 'white'
        }
      } else {
          const nav = document.getElementById('nav')
          // console.log(location);
          if(nav.className !== 'transparent') {
              nav.className = 'transparent'
          }

          if(location === 'http://localhost:3000/') {
            document.querySelectorAll('#link').forEach(element => {
              if (element.style !== "color:white!important") {
                element.style = "color:white!important"
              }
            })
          }
        }
    })
  }

  render() {
    return (
      <div className="navbar-fixed">
          <nav className="transparent" id="nav">
              <div className="nav-wrapper container">
              <Link to="/" className="brand-logo"><img src={icon} alt="logo" width="40" /></Link>
              <Link to="##" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
              <ul className="right hide-on-med-and-down">
                  <li><Link id="link" to="/">Inicio</Link></li>
                  <li><Link id="link" to="/contact">Contacto</Link></li>
                  <li><Link id="link" to="/about">Acerca de Nosotros</Link></li>
                  <li>
                    <Link className="waves-effect waves-light btn" to="/contact">Contáctenos</Link>
                  </li>
              </ul>
              </div>
        </nav>
      </div>

    );
  }
}

export default Navbar;