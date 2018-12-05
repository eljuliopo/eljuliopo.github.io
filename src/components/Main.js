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
          <p>Egresé de la carrera 'Diseño Gráfico Publicitario' en la Universidad Santo Tomás campus Talca, el año 2011. Desde ese entonces mi desempeño como diseñador gráfico ha sido de forma independiente, o free-lance, para distintos medios. </p>
          <p>Dentro de los trabajos realizados, destaco la gestión de contenidos visuales e infográficos para el periódico penquista <a href="http://www.resumen.cl">Resumen</a> desde el año 2014 en adelante. También vale mencionar el trabajo de imagen para el músico nacional Ricardo Charro Nuñez, alias <a href="https://www.facebook.com/pajaroprovinciano">Pájaro Provinciano</a>, cuya carrera se ha desarrollado en escenarios locales y extranjeros. </p>
          <p>En el año 2015 se fundó <a href="http://editorialderiva.org">Editorial Deriva</a>, un proyecto autogestionado en el que participo como diseñador gráfico y editor hasta el día de hoy.</p>
          <p className="align-center"><a href="src/docs/cv_julio.pdf"><span className="icon fa-file-pdf-o"> Curriculum Vitae para información detallada </span></a></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="align-center"><span className="icon fa-lightbulb-o"> </span>Portafolio</h2>
          <p className="align-center">Con algunos años de experiencia, puedo decir que la línea estética que mejor define los resultados es el alto-contraste y la expresión del street-art. Esta línea ha sido la muestra de una búsqueda continua de soluciones para una comunicación social efectiva, siendo la adopción de diversos soportes y plataformas la técnica artística empleada. A continuación puedes revisar parte del trabajo.  </p>
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
          <p>Las habilidades que más me ayudan y permiten generar resultados positivos son:</p>
          <p><b> 🠶 Habilidades comunicativas:</b> Escuchar, opinar y escribir.<br/>
              <b>🠶 Flexibilidad:</b> Adaptación rápida a los cambios.<br/>
              <b>🠶 Trabajo en equipo:</b> Toma de decisiones, capacidad de seguir instrucciones y desempeñar roles.<br/>
          </p>
          <p>También tengo conocimientos específicos en el uso de softwares relacionados al diseño gráfico. Entre estos, los que más utilizo son la Suite de Adobe (especialmente Photoshop, Illustrator, InDesign, Premiere Pro, After Effects), distintas aplicaciones de la Google Suite (Gmail, Google Drive, Google Docs, Tablas dinámicas, Maps, entre otros.).<br/>
          </p>
          <span className="image main"><img src={skill1} alt="" /></span>
          <p>Para el desarrollo de aplicaciones web, utilizo distintos soportes digitales, dependiendo de cada requerimiento. Entre los más utilizados, destaco los siguientes:</p>

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
