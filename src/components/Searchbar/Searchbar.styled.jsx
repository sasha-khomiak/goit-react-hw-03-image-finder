import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
`;

export const Button = styled.button`
  background-color: #f7ac3b;
  border-radius: 5px;
  border: none;
  width: 153px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 16px;
  line-height: 15px;

  cursor: pointer;

  color: #ffffff;

  &:hover {
    background-color: #d68d1f;
  }
`;

export const Input = styled.input`
  /* white */

  background: #ffffff;
  border-radius: 5px;
  border: none;

  width: 715px;
  height: 50px;
  padding: 10px;

  margin-left: 20px;
`;
