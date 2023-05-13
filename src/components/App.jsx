import React, { Component } from 'react';

// стилізація App
import { AppWrap } from './App.styled';

// підключення компонентів
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal/Modal';

// головний компонент
export class App extends Component {
  // static propTypes = {second: third}

  //наш стейт
  state = {
    query: '',
    page: 1,
    showModal: false,
    imageLink: '',
  };

  // перемикання модалки показ чи ні
  togleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  // що робити з отриманими даними при натиску кнопки у формі
  onSubmitSearchBtn = toFind => {
    this.setState({ query: toFind, page: 1 });
  };

  // лінк на фото для модального вікна
  setImageLink = link => {
    this.setState({ imageLink: link });
  };

  // рендеринг всього компонента
  render() {
    return (
      <AppWrap>
        {this.state.showModal && (
          <Modal
            togleModal={this.togleModal}
            imageLink={this.state.imageLink}
          />
        )}
        <Searchbar onSubmit={this.onSubmitSearchBtn} />
        <ImageGallery
          query={this.state.query}
          togleModal={this.togleModal}
          setImageLink={this.setImageLink}
        />
      </AppWrap>
    );
  }
}
