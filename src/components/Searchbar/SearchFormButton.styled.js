import styled from 'styled-components';

export const SearchFormButton = styled.button`
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #e4e4d9;

  &:hover {
    opacity: 1;
    border: 1px solid #215f00;
  }
`;
