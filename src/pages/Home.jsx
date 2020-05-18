import React, { Component } from 'react';

// import Carousel from '../components/carousel/Carousel.jsx';
import Section from '../components/section/Section.jsx';
import Section2 from '../components/section2/Section2.jsx';
import Section3 from '../components/section3/Section3.jsx';
import Hero from '../components/hero/Hero.jsx'
import Sidenav from '../components/sidenav/Sidenav.jsx'
import Footer from '../components/footer/Footer.jsx'

class Home extends Component {
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
        <Hero />
        <Sidenav />
        {/* <Carousel /> */}
        <Section />
        <Section2 />
        <Section3 />
        <Footer />
        {/* <Section2 /> */}

      </div>
    );
  }
}

export default Home