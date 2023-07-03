import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './ButtonLoadMore.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" className="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
