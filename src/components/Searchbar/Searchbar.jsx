import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchForm } from './SearchForm.styled';
import { SearchFormButton } from './SearchFormButton.styled';
import { SearchbarHeader } from './SearchbarHeader.styled';
import { SearchFormButtonLabel } from './SearchFormButtonLabel.styled';
import { SearchFormInput } from './SearchFormInput.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  onChange = event => {
    this.setState({ query: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <SearchbarHeader className="searchbar">
        <SearchForm className="form" onSubmit={this.onSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormButtonLabel className="button-label">
              <i className="fa fa-search"></i>
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.onChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
