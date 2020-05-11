import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar.jsx'
import Contacto from '../components/contacto/Contacto.jsx'
import Footer from '../components/footer/Footer.jsx'

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
            <Contacto />
        </div>
        <Footer />

      </div>
    );
  }
}

export default Contact