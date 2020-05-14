import React, { Component } from 'react';
import Contacto from '../components/contacto/Contacto.jsx'
import Footer from '../components/footer/Footer.jsx'
import Hero2 from '../components/hero2/Hero2.jsx';
import Sidenav from '../components/sidenav/Sidenav.jsx'

class Contact extends Component {
  componentWillMount() {
    window.scroll({top:0})
  }

  render() {
    return (
      <div>        
        <Hero2 />
        <Sidenav />
        <div className="container">
            <Contacto />
        </div>
        <Footer />

      </div>
    );
  }
}

export default Contact