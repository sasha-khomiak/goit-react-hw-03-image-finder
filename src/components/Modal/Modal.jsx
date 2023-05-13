// підключення бібліотек
// import PropTypes from 'prop-types'
import React, { Component } from 'react';

// стилізація компонентів
import { Overlay, ModalContainer, Img } from './Modal.styled';

// підключаємо ф-ію роботи з порталами в реакт домі
import { createPortal } from 'react-dom';

//створюємо новий елемент який буде порталом для модадки
const modalRoot = document.querySelector('#modal-root');

// компонент нашої модалки
export default class Modal extends Component {
  //   static propTypes = {second: third}

  // коли монтується модалка, чіпляємо слухача на натискання кнопок із обробником hanleKeyDown
  componentDidMount() {
    // console.log('монтуємо модалку');
    window.addEventListener('keydown', this.hanleKeyDown);
  }

  // коли демонтується модалка, чіпляємо очистку слухача на натискання кнопок із обробником hanleKeyDown
  componentWillUnmount() {
    // console.log('розмонтовуємо модалку');
    window.removeEventListener('keydown', this.hanleKeyDown);
  }

  // обробник слухача якщо натиснута кнопка Escape - демонтуємо модалку, перемикаємо тогл
  hanleKeyDown = event => {
    const { togleModal } = this.props;
    if (event.code === 'Escape') {
    }
    togleModal();
  };

  // Якшо клік події відбувся по Overlay то закриваємо модалку
  handleOverlayClick = event => {
    const { togleModal } = this.props;
    const { currentTarget, target } = event;
    if (currentTarget === target) {
      togleModal();
    }
  };

  // рендер компонента в новий портал (використовуємо createPortal), другий параметр назва порталу
  render() {
    const { imageLink } = this.props;
    return createPortal(
      <div>
        <Overlay onClick={this.handleOverlayClick}>
          <ModalContainer>
            <Img src={imageLink} alt="" />
          </ModalContainer>
        </Overlay>
      </div>,
      modalRoot
    );
  }
}
