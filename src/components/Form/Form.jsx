import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormContainer, InputLabel, Input, Btn } from './From.styled';
export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({
      [name]: value,
    }));
  };
  onFormSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    }; //Для кращої читабельності
    this.props.onSubmit(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <FormContainer>
          <InputLabel>
            Name
            <Input
              onChange={this.onInputChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputLabel>
          <InputLabel>
            Number
            <Input
              onChange={this.onInputChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputLabel>
          <Btn type="submit">Add new Contact</Btn>
        </FormContainer>
      </form>
    );
  }
}
Form.propTypes = {
  onFormSubmit: PropTypes.func,
};
