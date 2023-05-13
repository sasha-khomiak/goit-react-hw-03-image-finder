import { Li, Thumb, Img } from './ImageGalleryItem.styled';

// import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  // static propTypes = {second: third}

  onClickShowPhoto = () => {
    const { setImageLink, togleModal, image } = this.props;

    setImageLink(image.largeImageURL);
    togleModal();
  };

  render() {
    // console.log('image', this.props.image);
    const { image } = this.props;
    return (
      <Li>
        <Thumb onClick={this.onClickShowPhoto}>
          <Img src={image.webformatURL} alt="query" loading="lazy" />
        </Thumb>
      </Li>
    );
  }
}
