import React, { Component } from 'react'
import './hero2.css'
import Navbar from '../navbar/navbar.js'

class Hero2 extends Component {
    render() {
        return (
            <div className="hero2">
                <Navbar />
                <div className="overlay3">
                    <div className="container">
                        <div className="row">
                            <div className="col offset-m2 m8 center flow-text">
                                <h3>LOREM IPSUM</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero2