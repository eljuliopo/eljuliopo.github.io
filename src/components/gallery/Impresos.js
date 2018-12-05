import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'


const photos = [
  { src: 'https://i.ibb.co/f8DNbdp/afiche-mdia.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/TcFtDgd/afichefoco.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/TPY7Tm6/charro-stgo.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/1zCYNw7/loncomillafest-baronneue-weedmotive.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/3W8DrMM/urugay3.jpg', width: 4, height: 6 },
  { src: 'https://i.ibb.co/jwdHv2F/ed03.jpg', width: 4, height: 4 }

];

class Dgrafico extends React.Component {
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

Dgrafico.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Dgrafico
