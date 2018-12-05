import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'


const photos = [
  { src: 'https://image.ibb.co/g1fsy9/info1.jpg', width: 4, height: 6 },
  { src: 'https://image.ibb.co/di81rU/info3.png', width: 4, height: 6 },
  { src: 'https://image.ibb.co/ka8Hke/info2.jpg', width: 4, height: 6 },
  { src: 'https://image.ibb.co/jC1MrU/disco4.jpg', width: 4, height: 4 },
  { src: 'https://image.ibb.co/crfsy9/disco2.png', width: 4, height: 4 },
  { src: 'https://image.ibb.co/coMzd9/disco1.png', width: 4, height: 4 }

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
