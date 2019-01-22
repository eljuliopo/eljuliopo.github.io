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
          <br/><h4 className="align-center">Antecedentes</h4>
          <p>Egresé de la carrera 'Diseño Gráfico Publicitario' en la Universidad Santo Tomás campus Talca, el año 2011. Desde ese entonces mi desempeño como diseñador gráfico ha sido de forma independiente, free-lance, para distintos medios. </p>
          <p>Dentro de los trabajos realizados destaco la gestión de contenidos visuales e infográficos para el periódico penquista <a href="http://www.resumen.cl">Resumen</a>, desde el año 2014. Diseño gráfico para el músico y productor Ricardo Charro Nuñez, alias <a href="https://www.facebook.com/pajaroprovinciano">Pájaro Provinciano</a>. Trabajé como diseñador en proyectos SENAME, FONDART, FOSIS, como 'Escuelas de Rock', 'Cultivando Talentos', 'Espacio Dopamina', 'Yoga en tu barrio', 'Taller de Telar Mapuche Tejedoras de Villa Alegre', entre otros.</p>
          <p>En el año 2015 me integré como diseñador gráfico y encuadernador en el proyecto político-editorial <a href="http://editorialderiva.org">Deriva</a>.</p>
          <p className="align-center"><a href="src/docs/cv_julio.pdf"><span className="icon fa-file-pdf-o"> Curriculum Vitae para información detallada </span></a></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="align-center"><span className="icon fa-lightbulb-o"> </span>Portafolio</h2>
          <p className="align-center">Si hubiese que definir una línea estética no podría, pero son mi base creativa el alto-contraste y la inspiración que produce el street-art. Esta búsqueda en el tiempo, se ha esmerado en encontrar soluciones para una comunicación visual efectiva. Puedes revisar parte del trabajo.  </p>
          <h3 className="align-center"><span className="icon fa-pie-chart fa-lg"> </span>Imagen Corporativa </h3>
          <div>
              <Web />
          </div>
            <p></p><br/>
          <h3 className="align-center"><span className="icon fa-pencil fa-lg"> </span>diseño gráfico </h3>

          <div>
          <Dgrafico />
          </div>
          <p></p><br/>


          <h3 className="align-center"><span className="icon fa-print fa-lg"> </span>producción de impresos </h3>
          <div>
          <Impresos />
          <Deditorial />
          </div>
          <p></p><br/>

          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="align-center"><span className="icon fa-cogs"> </span>Skills</h2>
        <span className="image main"><img src={pic03} alt="" /></span>
          <p>Herramientas para el desempeño:</p>
          <p><b> 🠶 Habilidades comunicativas:</b> Escuchar, opinar y escribir.<br/>
              <b>🠶 Flexibilidad:</b> Adaptación rápida a los cambios.<br/>
              <b>🠶 Trabajo en equipo:</b> Toma de decisiones, capacidad de seguir instrucciones y desempeñar roles.<br/>
          </p>
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
          <p className="align-center">Contáctame para consultas, cotizaciones o encargos, completando el siguiente formulario:</p>
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
