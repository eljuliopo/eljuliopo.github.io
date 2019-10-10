import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'


class Logos extends React.Component {

  render() {

    const params = {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    };

    return (
      <div>
        <Swiper {...params} className='swiper-container'>
            <img src="https://i.ibb.co/G0P6kFd/01-decoevents.jpg" alt="" />
            <img src="https://i.ibb.co/51BGXPF/03-inkieta.jpg" alt="" />
            <img src="https://i.ibb.co/MnYj8t7/04-mavic.jpg" alt="" />
            <img src="https://i.ibb.co/LrPhRqS/01-trapiche.jpg" alt="" />
            <img src="https://i.ibb.co/CpLn316/02-dopamina.jpg" alt="" />
            <img src="https://i.ibb.co/S6bF26X/05-congreso.jpg" alt="" />
            <img src="https://i.ibb.co/CPzqHqM/06-deriva.jpg" alt="" />
        </Swiper>
      </div>



    )
  }
}

Logos.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Logos
