import React, { Component } from 'react';
import Contacto from '../components/contacto/contacto.jsx'
import Footer from '../components/footer/footer.jsx'
import Hero2 from '../components/hero2/hero2.jsx';
import Sidenav from '../components/sidenav/sidenav.jsx'

class Contact extends Component {
  componentWillMount() {
    window.scroll({top:0})
    // let overlay = document.querySelector(".sidenav-overlay")
    // if (overlay) {
    //   overlay.className = ""
    // }
  }

  // componentDidMount() {
  //   document.querySelector(".sidenav-overlay").className = ""
  // }

  render() {
    return (
      <div>        
        <Sidenav />
        <Hero2 />
        <div className="container">
            <Contacto />
        </div>
        <Footer />

      </div>
    );
  }
}

export default Contact