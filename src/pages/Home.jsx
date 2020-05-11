import React, { Component } from 'react';

import Carousel from '../components/carousel/Carousel.jsx';
import Section from '../components/section/Section.jsx';
import Hero from '../components/hero/Hero.jsx'
import Sidenav from '../components/sidenav/Sidenav.jsx'
import Footer from '../components/footer/Footer.jsx'

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Sidenav />
        <Carousel />
        <Section />
        <Footer />
        {/* <Section2 /> */}

      </div>
    );
  }
}

export default Home