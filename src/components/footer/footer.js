import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer black">
                <div className="container">
                    <div className="row flow-text">
                        <div className="col m3">
                            <h5>Acerca de Nosotros</h5>
                            <p>Duis semper mauris vitae purus rhoncus suscipit. Nunc dictum dapibus tellus, at viverra risus pharetra id. Nulla facilisi. Ut mollis et augue non gravida. Sed ipsum urna, venenatis ut vehicula nec</p>
                        </div>
                        <div className="col m3">
                            <h5>Contáctanos</h5>
                            <p>company@name.com</p>
                        </div>
                        <div className="col m3">
                            <h5>Nuestros Clientes</h5>
                            <p>Viña</p>
                        </div>
                        <div className="col m3">
                            <h5>Nuestros Servicios</h5>
                            <p>Colocar Servicios</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center">
                        © 2020 Construcciones C&E Todos los derechos reservados
                    </div>
                </div>  
            </footer>
        )
    }
}

export default Footer