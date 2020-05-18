import React, { Component } from 'react'
import Navbar from '../navbar/navbar.js'
import { Link } from 'react-router-dom'
import './hero.css'

class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <Navbar />
                <div className="overlay">
                    <div className="container">
                        <div className="row center ">
                            <div className="col m8 s12 offset-m2">
                                <div className="flow-text">
                                    <p>Bienvenido a:</p>
                                    <h1>Construcciones C&E</h1>
                                    <Link className="waves-effect waves-light btn-small white a" to="/about">Conócenos</Link>
                                    <Link className="waves-effect waves-light btn-small b pulse" to="contact">Contáctanos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero