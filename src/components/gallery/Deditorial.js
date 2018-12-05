import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'


const photos = [
  { src: 'https://i.ibb.co/Z6J06cB/ALTAZOR.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/wYm2Q1J/ARTAUD.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/vcmrv6P/BRESSON.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/1MvXvPW/HOJASPARRA.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/MswdnCh/LACIUDAD.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/xFk8sBs/LIRICOMIGLIARO.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/K21PrPH/LLANOLLAMAS.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/7C6qtYF/MALR.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/1dGg3ck/MANOSSUCIAS.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/KLBXXVL/POESIATRANSITO.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/vcK4Ly0/PORTADA-SIMBIOTICO.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/rm4SVmb/PORTADA-ANTOLOGIA-0.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/BCwdnng/sharon.jpg', width: 4, height:6 },
  { src: 'https://i.ibb.co/GHZNjGh/TABAROVSKY.jpg', width: 4, height: 6 }

];

class Deditorial extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

Deditorial.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Deditorial
