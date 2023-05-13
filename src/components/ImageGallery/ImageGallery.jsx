// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Ul } from './ImageGallery.styled';
// import getImagesList from '../../utils/get-images-request';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
  //   async getImages() {
  //     let listOfPictures = await getImagesList(this.props.query, 1);
  //     console.log(listOfPictures.hits);
  // }

  render() {
    const arr = [
      {
        id: 5148602,
        webformatURL:
          'https://pixabay.com/get/gdbd839b0e83385ac66fcee9bc0e323a534b562acc0c6ac1f74b053d74c283f34a02ea71e551ba2a5ca34ad0158e035a5fd6fc87e71405068bf3aecaaa955d51c_640.jpg',
        largeImageURL:
          'https://pixabay.com/get/g26fad9563c85155daa52d8dc379e5efd19a950248baa5ef12ba838d1e85023c18007c6ecb7ff7591ab367002da7e8ce770d61f72568d3d56accc348a2b9c3b38_1280.jpg',
      },
      {
        id: 1,
        webformatURL:
          'https://pixabay.com/get/gde4eee976a4bc7f0d0b6244066a28386173cda131be14d8b9936b9035378f27627fa255a83e003489a7648407d1738f0d72b6acb45e558987036aabfed98def2_640.jpg',
        largeImageURL:
          'https://pixabay.com/get/g8d3fdb6f50dae3cfd1a29f2f7215f0b38597c6d352ef7ea297f28c0d616e228889d33c64fc78a1b20e8d5cfcb2157aa1b6295a9d18feb48d30a1c0d192785f15_1280.jpg',
      },
      {
        id: 2,
        webformatURL:
          'https://pixabay.com/get/gde4eee976a4bc7f0d0b6244066a28386173cda131be14d8b9936b9035378f27627fa255a83e003489a7648407d1738f0d72b6acb45e558987036aabfed98def2_640.jpg',
        largeImageURL:
          'https://pixabay.com/get/g8d3fdb6f50dae3cfd1a29f2f7215f0b38597c6d352ef7ea297f28c0d616e228889d33c64fc78a1b20e8d5cfcb2157aa1b6295a9d18feb48d30a1c0d192785f15_1280.jpg',
      },
    ];
    // this.getImages();
    // console.log(arr);
    return (
      <Ul className="gallery">
        {arr.map(image => (
          <ImageGalleryItem
            image={image}
            key={image.id}
            togleModal={this.props.togleModal}
            setImageLink={this.props.setImageLink}
          />
        ))}
      </Ul>
    );
  }
}

//   static propTypes = { second: third };
