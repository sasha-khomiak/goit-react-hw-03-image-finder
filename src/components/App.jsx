import React, { Component } from 'react';

// підключення компонентів
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

// стилізація App
import { AppWrap } from './App.styled';

// головний компонент
export class App extends Component {
  //наш стейт в який закидаємо комбінацію пошуку з форми
  state = {
    query: '',
  };

  // що робити з отриманими даними при натиску кнопки у формі
  // записати значення тут в state App
  onSubmitSearchBtn = toFind => {
    this.setState({ query: toFind });
  };

  render() {
    return (
      <AppWrap>
        <Searchbar onSubmit={this.onSubmitSearchBtn} />
        {this.state.query && <ImageGallery query={this.state.query} />}
      </AppWrap>
    );
  }
}
