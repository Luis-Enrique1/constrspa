import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar.jsx'
import Contacto from '../components/contacto/Contacto.jsx'

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
            <Contacto />
        </div>

      </div>
    );
  }
}

export default Contact