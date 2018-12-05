import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <p className="copyright">&copy; JULIO DÍAZ PÉREZ — eljuliopo@gmail.com — <span className="icon fa-phone"> </span>+56 9 621 528 93</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
