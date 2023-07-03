import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemLi } from './ImageGalleryItemLi.styled';
import { ImageGalleryItemImage } from './ImageGalleryItemImage.styled';

export const ImageGalleryItem = ({ image, onClick }) => {
  const { webformatURL, largeImageURL, tags } = image;

  return (
    <ImageGalleryItemLi
      className="gallery-item"
      onClick={() => onClick(largeImageURL)}
    >
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        className="gallery-item-image"
      />
    </ImageGalleryItemLi>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
