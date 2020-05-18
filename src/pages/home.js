import React, { Component } from 'react';

// import Carousel from '../components/carousel/Carousel.jsx';
import Section from '../components/section/section.js';
import Section2 from '../components/section2/section2.js';
import Section3 from '../components/section3/section3.js';
import Hero from '../components/hero/hero.js'
import Sidenav from '../components/sidenav/sidenav.js'
import Footer from '../components/footer/footer.js'

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