// import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Button } from './Searchbar.styled';

class Searchbar extends Component {
  //   static propTypes = { second: third };

  state = {
    query: '',
  };

  //при зміні значення інпута перезаписуємо внутрішній стейт
  handleChangeInput = event => {
    this.setState({ query: event.currentTarget.value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.clearForm();
    this.props.onSubmit(this.state.query);
  };

  // очистка форми
  clearForm = () => {
    this.setState({ query: '' });
  };

  // рендеринг форми
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmitForm}>
          <Button type="submit" className="button">
            <span className="button-label">Search</span>
          </Button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

// Searchbar.propTypes = {};
