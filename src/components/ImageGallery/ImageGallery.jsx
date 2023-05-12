// import PropTypes from 'prop-types';
import React, { Component } from 'react';

// import getImagesList from '../../utils/get-images-request';

export default class ImageGallery extends Component {
  //   async getImages() {
  //     let listOfPictures = await getImagesList(this.props.query, 1);
  //     // console.log(listOfPictures.hits);
  //   }

  render() {
    return <ul className="gallery"></ul>;
  }
}

//   static propTypes = { second: third };
