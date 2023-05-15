import { Rings } from 'react-loader-spinner';

// підключаємо ф-ію роботи з порталами в реакт домі
import { createPortal } from 'react-dom';

import { LoaderContainer } from './Loader.styled';

//створюємо новий елемент який буде порталом для модадки
const loaderRoot = document.querySelector('#loader-root');

const Loader = () => {
  return createPortal(
    <LoaderContainer>
      <Rings
        height="80"
        width="80"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </LoaderContainer>,
    loaderRoot
  );
};

export default Loader;
