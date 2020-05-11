import React, { Component } from 'react';
import M from 'materialize-css';
import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'
import slider3 from './slider3.jpg'
import slider4 from './slider4.jpg'
import slider5 from './slider5.jpg'
import './contacto.css'
import { Link } from 'react-router-dom';

class Contacto extends Component {
  componentDidMount() {
    var elem = document.querySelector('.carousel');
    M.Carousel.init(elem, { duration: 200 });
  }

  render() {
    return (
        <div className="row">
            <div className="col m6 s12">
                <h2>Contacto</h2>
                <p>Email: email@gmail.com</p>
                <p>Telefono: 12345678</p>
                <hr className="lefthr"/>
            </div>
            <div className="col m6 s12">
                <div className="carousel center carousel2">
                    <Link className="carousel-item" to="#one!">
                      <img src={slider1} alt="slider1"/>
                      <h4>Metales</h4>
                      <hr className="centerhr"/>
                    </Link>
                    <Link className="carousel-item" to="#two!">
                      <img src={slider2} alt="slider2"/>
                      <h4>Planos</h4>
                      <hr className="centerhr"/>
                    </Link>
                    <Link className="carousel-item" to="#three!">
                      <img src={slider3} alt="slider3"/>
                      <h4>Estructuras</h4>
                      <hr className="centerhr"/>
                    </Link>
                    <Link className="carousel-item" to="#four!">
                      <img src={slider4} alt="slider4"/>
                      <h4>Muros</h4>
                      <hr className="centerhr"/>
                    </Link>
                    <Link className="carousel-item" to="#five!">
                      <img src={slider5} alt="slider5"/>
                      <h4>Casas</h4>
                      <hr className="centerhr"/>
                    </Link>
                </div>
            </div>                
        </div>
    );
  }
}

export default Contacto;