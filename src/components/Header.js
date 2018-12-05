import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-book"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h4>Portafolio</h4>
                <h1>JULIO DÍAZ PÉREZ</h1>
                <p>DISEÑO GRÁFICO - DESARROLLO WEB - PRODUCCIÓN DE IMPRESOS</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Trabajos</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contacto</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
