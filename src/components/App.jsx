import React, { Component } from 'react';

// підключаємо бібліотеку axios
import axios from 'axios';

// підключення компонентів
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';

// стилізація App
import { AppWrap } from './App.styled';

// головний компонент
export class App extends Component {
  //
  //наш стейт в який закидаємо комбінацію пошуку з форми
  // imagesArray - масив для рендерингу
  // query - пошуковий запит після сабміту
  // showModal - чи показуємо форму
  // imageLink - дінк фотографії в модалці
  state = {
    imagesArray: [],
    query: '',
    showModal: false,
    imageLink: '',
    // page: 1,
  };

  // що робити з отриманими даними при натиску кнопки у формі
  // записати значення тут в state App в поле query
  // викликати ф-ію, яка змінить imagesArray
  onSubmitSearchBtn = toFind => {
    this.setState({ query: toFind });
    this.getFromAPI(toFind, 1);
  };

  // асинхронний метод для результатів запиту і що робити з ними
  async getFromAPI(toFind, page) {
    const API_KEY = '34781743-09d11a08c8aa729d147b2c9f6';
    const BASE_URL = 'https://pixabay.com/api/';

    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
    });

    const URL = `${BASE_URL}?key=${API_KEY}&q=${toFind}&page=${page}&${searchParams}`;

    try {
      const response = await axios.get(URL);
      console.log('response', response);
      console.log('response.data.total', response.data.total);
      //якщо немає жодного збігу, то виводимо про це повідомлення
      if (response.data.total < 1) {
        console.log('результатів нема');
      }

      if (response.data.total > 1) {
        this.setState({ imagesArray: response.data.hits });
      }

      //
    } catch (error) {
      this.setState({ error });
    }
  }

  // async apiRequest(q, page) {
  //   const key = '34781743-09d11a08c8aa729d147b2c9f6';
  //   const URL = 'https://pixabay.com/api/';
  //   const response = await axios.get(
  //     `${URL}?key=${key}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  //   );

  //   console.log(response.data);
  //   return response.data;
  // }

  // // функція, яка за запитом і номером сторінки
  // async getImagesFromApi(toFind, page) {
  //   let result = await apiRequest(toFind, 1);
  //   return result;
  //   // console.log('result', result);
  // }

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
      <AppWrap>
        <Searchbar onSubmit={this.onSubmitSearchBtn} />
        {this.state.query && (
          <ImageGallery
            imagesArray={this.state.imagesArray}
            togleModal={this.togleModal}
            setImageLink={this.setImageLink}
          />
        )}
        {this.state.showModal && (
          <Modal
            imageLink={this.state.imageLink}
            togleModal={this.togleModal}
          />
        )}
      </AppWrap>
    );
  }
}

//     //   {this.state.imagesArray.length > 0 && (
//     //     <button onClick={this.loadMorePictures}>load more</button>
//     //   )}
