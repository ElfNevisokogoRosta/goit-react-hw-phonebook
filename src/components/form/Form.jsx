import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.onNameInput = this.onNameInput.bind(this);
    this.onNumberInput = this.onNumberInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      contact: {},
      id: nanoid(),
      name: '',
      number: '',
    };
  }
  onNameInput(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onNumberInput(e) {
    this.setState({
      number: e.target.value,
      contact: {
        name: this.state.name,
        number: this.state.number,
        id: this.state.id,
      },
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.setState({
      name: '',
      number: '',
    });

    this.props.onSubmit(this.state.contact);
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Name
          <input
            onChange={this.onNameInput}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.onNumberInput}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add new Contact</button>
      </form>
    );
  }
}
