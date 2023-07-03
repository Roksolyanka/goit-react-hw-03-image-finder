import styled from 'styled-components';

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    border: 1px solid #215f00;
    box-shadow: 10px 10px 5px -5px rgba(33, 95, 0, 1);
  }
`;
