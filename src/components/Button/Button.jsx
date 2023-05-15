import { StyledButton } from './Button.styled';

const Button = ({ loadMorePictures }) => {
  return (
    <>
      <StyledButton onClick={loadMorePictures}>Load more</StyledButton>
    </>
  );
};

export default Button;
