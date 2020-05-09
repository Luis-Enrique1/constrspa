import React, { Component } from 'react';
import M from 'materialize-css';
// import slider1 from './slider1.png'
// import slider2 from './slider2.png'
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
            <div className="col m6">
                <h1>hola</h1>
            </div>
            <div className="col m6">
                <div className="carousel center">
                    <Link className="carousel-item" to="#one!"><h1>1</h1></Link>
                    <Link className="carousel-item" to="#two!"><h1>12</h1></Link>
                    <Link className="carousel-item" to="#three!"><h1>13</h1></Link>
                    <Link className="carousel-item" to="#four!"><h1>14</h1></Link>
                    <Link className="carousel-item" to="#five!"><h1>15</h1></Link>
                </div>
            </div>                
        </div>
    );
  }
}

export default Contacto;