import React, { Component } from 'react'
import './section.css'
import image from './section.png'

class Section extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col s12 m4 left">
                                <div className="content-left flow-text">
                                    <h2>Más de 10 años de experiencia</h2>
                                    <p>10 años ayudando a cumplir sueños</p>
                                </div>
                                <div className="content-left flow-text">
                                    <h2>Más de 10 años de experiencia</h2>
                                    <p>10 años ayudando a cumplir sueños</p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <img src={image} alt=""/>
                            </div>
                            <div className="col s12 m4">
                                <div className="content-right flow-text">
                                    <h2>Personas y Empresas</h2>
                                    <p>Realizamos todo tipo de proyectos</p>
                                </div>
                                <div className="content-right flow-text">
                                    <h2>Personas y Empresas</h2>
                                    <p>Realizamos todo tipo de proyectos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Section