// імпорт бібліотек
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// стилізація нашого компонента
import { Li, Thumb, Img } from './ImageGalleryItem.styled';

// компонент одного елемента галереї в пропсах отримує:
// обʼєкт image - містить інформацію про картинку
// togleModal - метод перемикач модалки (в даному разі на її показ),
// setImageLink - передача в стейт картинки для модалки
export default class ImageGalleryItem extends Component {
  // обробник кліку на на фотографію, передає в стейт лінк фотографії і показує модалку
  onClickShowPhoto = () => {
    const { setImageLink, togleModal, image } = this.props;
    setImageLink(image.largeImageURL);
    togleModal();
  };

  // рендер одного нашого компонента фотографії
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

// перевірка PropTypes
ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  setImageLink: PropTypes.func.isRequired,
  togleModal: PropTypes.func.isRequired,
};
