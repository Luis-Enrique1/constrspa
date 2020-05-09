import React, { Component } from 'react';
import M from 'materialize-css';
import slider1 from './slider1.png'
import slider2 from './slider2.png'
import './carousel.css'
import { Link } from 'react-router-dom';

class Carousel extends Component {
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    M.Carousel.init(elem, { duration: 200, fullWidth: true });
  }

  render() {
    return (
        <div className="carousel carousel-slider center">
            <div className="carousel-item" to="#one!">
              <div className="container">
                <div className="row">
                  <div className="col m6">
                    <img src={slider1} alt="slider1"/>
                  </div>
                  <div className="col m6">
                    <h1>Construcciones y Obras Civíles</h1>
                    <p>Realizamos el trabajo que usted necesite a su medida</p>
                    <Link className="waves-effect waves-light btn" to="/contact">Contáctenos</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" to="#two!">
            <div className="container">
              <div className="row">
                  <div className="col m6">
                    <img src={slider2} alt="slider2"/>
                  </div>
                  <div className="col m6">
                    <h1>Trabaje con Gente Responsable</h1>
                    <p>¿Cansado de gente que no Responde?</p>
                    <Link className="waves-effect waves-light btn" to="/contact">Contáctenos</Link>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default Carousel;