import React from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './Overlay.styled';
import { ModalWindow } from './ModalWindow.styled';

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEscape);
  }

  onCloseEscape = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { image } = this.props;

    return (
      <Overlay className="overlay" onClick={this.onBackdropClick}>
        <ModalWindow className="modal">
          <img src={image} alt={image.tags} />
        </ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
