import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './section.css'

class Section extends Component {
    render() {
        return (
            <section className="section">
                <div className="overlay2">
                    <div className="container">
                        <div className="row content-section flow-text">
                            <div className="col l3 texto">
                                <h4>Lorem Ipsum</h4>
                                <hr className="lefthr" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates dolores veritatis</p>
                                <ul>
                                    <li><p>-Lorem ipsum dolor sit amet</p></li>
                                    <li><p>-Lorem ipsum dolor sit amet</p></li>
                                    <li><p>-Lorem ipsum dolor sit amet</p></li>
                                </ul>
                                <Link className="waves-effect waves-light btn-small b pulse" to="contact">Contáctanos</Link>
                            </div>
                            <div className="col offset-l1 l8">
                                <div className="row">
                                    <div className="espacio col m6">
                                        <div className="card-panel center">
                                            <h5>Cumplimiento de fechas</h5>
                                            <hr/>
                                            <p>Maxime voluptates dolores veritatis non doloremque</p>
                                        </div>
                                    </div>
                                    <div className="espacio col m6">
                                        <div className="card-panel center">
                                            <h5>Cumplimiento de fechas</h5>
                                            <hr/>
                                            <p>Maxime voluptates dolores veritatis non doloremque</p>
                                        </div>
                                    </div>
                                    <div className="espacio col m6">
                                        <div className="card-panel center">
                                            <h5>Cumplimiento de fechas</h5>
                                            <hr/>
                                            <p>Maxime voluptates dolores veritatis non doloremque</p>
                                        </div>
                                    </div>
                                    <div className="espacio col m6">
                                        <div className="card-panel center">
                                            <h5>Cumplimiento de fechas</h5>
                                            <hr/>
                                            <p>Maxime voluptates dolores veritatis non doloremque</p>
                                        </div>
                                    </div>
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