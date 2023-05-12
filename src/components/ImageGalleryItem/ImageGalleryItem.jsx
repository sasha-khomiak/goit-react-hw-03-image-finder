import { Li, Thumb, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image }) => {
  console.log('image', image);
  return (
    <Li>
      <Thumb>
        <Img src={image.webformatURL} alt="query" loading="lazy" />
      </Thumb>
    </Li>
  );
};

export default ImageGalleryItem;
