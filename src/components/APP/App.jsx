import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from '../Searchbar/Searchbar';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Modal } from '../Modal/Modal';
import { Loader } from '../Loader/Loader';
import { AppDiv } from './AppDiv.styled';

const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: null,
  };

  onSubmit = query => {
    const queryTrim = query.trim();
    if (queryTrim === '') {
      return toast.error(
        'You did not specify data for the search, please try again!',
        toastConfig
      );
    }
    this.setState({ query: queryTrim, images: [], page: 1 }, this.fetchImages);
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    const apiKey = '36422452-9b888b62de5b5be2dbb1e9e04';

    if (!query) {
      return toast.error(
        'You did not specify data for the search, please try again!',
        toastConfig
      );
    }

    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.hits.length === 0) {
        toast.error('No images were found for your request!', toastConfig);
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }));
        toast.success('Images successfully uploaded!', toastConfig);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, toastConfig);
    } finally {
      this.setState({ isLoading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  onModalClick = image => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedImage: image,
    }));
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <AppDiv>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} onClick={this.onModalClick} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal image={selectedImage} onClose={this.onModalClick} />
        )}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppDiv>
    );
  }
}
