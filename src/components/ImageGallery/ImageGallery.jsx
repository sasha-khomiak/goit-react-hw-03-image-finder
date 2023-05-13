// підключення бібліотек
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import getImagesList from '../../utils/get-images-request';

// стилізація нашого контейнера в якому  вставляємо результати наших картинок
import { Ul } from './ImageGallery.styled';

// підключення компонента ImageGalleryItem
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';

// наш компонент галереї
export default class ImageGallery extends Component {
  //стейт компонента галелеї
  state = {
    imagesArray: [],
    query: '',
    showModal: false,
    imageLink: '',
    page: 1,
  };

  async componentDidMount() {
    let listOfPictures = await getImagesList(this.props.query, 1);
    this.setState({ imagesArray: listOfPictures.hits });
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   // console.log(this.props.query);
  //   if (this.props.query === this.state.query) {
  //     return;
  //   }
  //   let listOfPictures = await getImagesList(this.props.query, 1);
  //   this.setState({ imagesArray: listOfPictures.hits });
  // }

  loadMorePictures = () => {};

  // перемикання модалки показ чи ні
  togleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  // лінк на фото для модального вікна
  setImageLink = link => {
    this.setState({ imageLink: link });
  };

  render() {
    return (
      <>
        <Ul>
          {this.state.imagesArray.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              togleModal={this.togleModal}
              setImageLink={this.setImageLink}
            />
          ))}
        </Ul>
        {this.state.imagesArray.length > 0 && (
          <button onClick={this.loadMorePictures}>load more</button>
        )}
        {this.state.showModal && (
          <Modal
            togleModal={this.togleModal}
            imageLink={this.state.imageLink}
            setImageLink={this.setImageLink}
          />
        )}
      </>
    );
  }
}

// перевірка PropTypes
ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
};
