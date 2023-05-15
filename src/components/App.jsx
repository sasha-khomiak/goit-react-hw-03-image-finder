import React, { Component } from 'react';

// підключаємо бібліотеку axios
import axios from 'axios';

// підключаємо бібліотеку react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// підключаємо бібліотеку Loader

// підключення компонентів
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Loader from './Loader/Loader';
import Button from './Button';

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
    page: 1,
    showBtnLoadMore: false,
    isLoading: false,
  };

  //  поки не розумію, що сюжи питсати
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}

  // що робити з отриманими даними при натиску кнопки у формі
  // викликати ф-ію, яка змінить imagesArray  а потім
  // записати значення тут в state App в поле query
  // скинути сторінку і скинути значення картинок які вже є в стейт
  onSubmitSearchBtn = toFind => {
    this.setState({ query: toFind, imagesArray: [], page: 1 });
    this.getFromAPI(toFind, 1);
  };

  // при натиску кнопки loadMore
  // ми довантажуємо в стейт ше картинки за запитом і збідьшеним на 1 номером сторінки
  // в стейт перезаписуємо сторінку + 1
  loadMorePictures = () => {
    this.getFromAPI(this.state.query, this.state.page + 1);
    this.setState(prevState => ({ page: prevState.page + 1 }));
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
      this.setState({ isLoading: true });
      const response = await axios.get(URL);
      // console.log('response', response);
      // console.log('response.data.total', response.data.total);
      //
      // якщо немає жодного збігу, то виводимо про це повідомлення
      // і скидаємо стейт, query, щоб не засмічувався
      if (response.data.totalHits < 1) {
        toast(`За запитом "${this.state.query}" результатів нема!`);
        this.setState({ query: '', page: 1, showBtnLoadMore: false });
      }
      //
      //Якщо у нас є результати для показу, то треба
      // записати (розпилити) в стейт imagesArray отриманий масив
      else if (response.data.hits.length !== 0) {
        this.setState(prevState => ({
          imagesArray: [...prevState.imagesArray, ...response.data.hits],
        }));
        //
        //рахуємо чи є ще на сервері фотографії.
        //тобто чи треба показувати кнопку "завантажити ще" (статус showBtnLoadMore)
        // для цього кількість результатів у одному запиті множимо на поточний номер сторінки
        // і отримуємо кількість уже отриманих на компі картинок
        // на сервері лишаються ще картинки, якщо ця цифра менше за response.data.totalHits
        const alreadyDownloaded = 12 * this.state.page;
        if (alreadyDownloaded < response.data.totalHits) {
          if (this.state.page === 1) {
            toast(
              `За запитом "${this.state.query}" знайдено картинок: ${response.data.totalHits}. Натисни "завантажити ще", щоб отримати ще 12 картинок!`
            );
          } else {
            const moreImages = response.data.totalHits - alreadyDownloaded;
            toast(
              `За запитом "${this.state.query}" лишилося ще картинок: ${moreImages} із ${response.data.totalHits}. Натисни "завантажити ще", щоб отримати ще 12 картинок!`
            );
          }

          this.setState({ showBtnLoadMore: true });
        } else {
          toast(
            `Це всі результати за запитом "${this.state.query}". Більше результатів нема!`
          );
          this.setState({ showBtnLoadMore: false });
        }
      }

      this.setState({
        isLoading: false,
      });
      //
    } catch (error) {
      this.setState({ error });
    }
  }

  // перемикання модалки показ чи ні, вміст модалки передаємо пропсом зі стейт
  togleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  // встанвлення лінку фото для модального вікна (використовується в ImageGaleryItem)
  setImageLink = link => {
    this.setState({ imageLink: link });
  };

  render() {
    return (
      <AppWrap>
        {this.state.isLoading && <Loader />}
        <ToastContainer autoClose={3000} />
        <Searchbar onSubmit={this.onSubmitSearchBtn} />
        {this.state.query && (
          <ImageGallery
            imagesArray={this.state.imagesArray}
            togleModal={this.togleModal}
            setImageLink={this.setImageLink}
          />
        )}
        {this.state.showBtnLoadMore && (
          <Button loadMorePictures={this.loadMorePictures} />
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
