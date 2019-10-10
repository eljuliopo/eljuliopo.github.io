import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Dgrafico from '../components/gallery/Dgrafico'
import Web from '../components/gallery/Web'
import Impresos from '../components/gallery/Impresos'
import Deditorial from '../components/gallery/Deditorial'




import pic01 from '../images/pic01.jpg'
import pic02 from '../images/trabajos.jpg'
import pic03 from '../images/pic03.jpg'
import skill1 from '../images/skill1.jpg'
import skill2 from '../images/skill2.jpg'





class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="align-center"><span className="icon fa-eye"> </span>Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h3 className="align-right">Julio díaz pérez
          <br/><h4>Diseñador gráfico</h4>
          </h3>
          <p>🠶 Diseñador gráfico publicitario. Universidad Santo Tomás campus Talca 2007—2011.</p>
          <p>🠶 Diseño infográfico y gestión de contenido visual en <a href="http://www.resumen.cl" target="_blank">Resumen.cl</a>. 2014—2018</p>
          <p>🠶 Diseño gráfico y producción multimedia para el músico y productor Ricardo Charro Nuñez, alias <a href="https://www.facebook.com/pajaroprovinciano" target="_blank">Pájaro Provinciano</a>. 2015—2019</p>
          <p>🠶 Gestión de diseño en proyectos SENAME, SERCOTEC, FONDART, FOSIS, tales como 'Escuelas de Rock', 'Cultivando Talentos', 'Espacio Dopamina', 'Yoga en tu barrio', 'Taller de Telar Mapuche Tejedoras de Villa Alegre'.</p>
          <p>🠶 Desde el año 2015 colaborador y diseñador en el proyecto editorial y literario Deriva, <a href="http://editorialderiva.org" target="_blank">editorialderiva.org</a></p>
          <p>🠶 Miembro y diseñador gráfico en Fundación Comunidad Artística del Maule, fundada el año 2018.  </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="align-center"><span className="icon fa-lightbulb-o"> </span>Trabajos</h2>


          <div>
          </div>
            <p></p><br/>
          <div>
          <Dgrafico />
          <Impresos />
          <Deditorial />
          </div>
          <p></p><br/>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="align-center"><span className="icon fa-cogs"> </span>Skills</h2>

          <p>Los softwares que utilizo para diseño gráfico son la Suite de Adobe (específicamente Photoshop, Illustrator, InDesign, Premiere Pro, After Effects), distintas aplicaciones de la Google Suite (Gmail, Google Drive, Google Docs, Tablas dinámicas, Maps, entre otros.).<br/>
          </p>
          <span className="image main"><img src={skill1} alt="" /></span>
          <p>Para el desarrollo de aplicaciones web utilizo distintos medios open source, dependiendo del requerimiento de cada proyecto. Entre los más utilizados destaco los siguientes:</p>

          <span className="image main"><img src={skill2} alt="" /></span>



          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="align-center"><span className="icon fa-envelope-o"> </span>Contacto</h2>
          <br />
          
          <form method="post" action="https://formspree.io/eljuliopo@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="_replyto" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensaje</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Enviar Mensaje" className="special" /></li>
              <li><input type="reset" value="Limpiar" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
