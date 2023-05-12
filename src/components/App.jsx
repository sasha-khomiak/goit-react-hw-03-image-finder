import React, { Component } from 'react';

// стилізація App
import { AppWrap } from './App.styled';

// підключення компонентів
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

// головний компонент
export class App extends Component {
  // static propTypes = {second: third}

  //наш стейт
  state = {
    query: '',
    page: 1,
  };

  // що робити з отриманими даними при натиску кнопки у формі
  onSubmitSearchBtn = toFind => {
    this.setState({ query: toFind, page: 1 });
  };

  // рендеринг всього компонента
  render() {
    return (
      <AppWrap>
        <Searchbar onSubmit={this.onSubmitSearchBtn} />
        <ImageGallery query={this.state.query} />
      </AppWrap>
    );
  }
}
