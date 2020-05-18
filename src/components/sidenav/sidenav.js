import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import icon from '../navbar/icon.png'

class Sidenav extends Component {
    render() {
        return(
            <ul className="sidenav" id="mobile-demo">
                <li className="pt center"><Link to="/"><img src={icon} alt="logo" width="40" /></Link> <hr/></li>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
                <li><Link to="/about">Acerca de Nosotros</Link></li>
            </ul>
        )
    }
}

export default Sidenav