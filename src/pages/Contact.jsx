import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar.jsx'
import Contacto from '../components/contacto/Contacto.jsx'
import Footer from '../components/footer/Footer.jsx'
import Section2 from '../components/section2/Section2.jsx';


class Contact extends Component {
  render() {
    return (
      <div>        
        <Navbar />
        <Section2 />
        <div className="container">
            <Contacto />
        </div>
        <Footer />

      </div>
    );
  }
}

export default Contact