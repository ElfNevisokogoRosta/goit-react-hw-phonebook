import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { Container, Title, SecondaryTitle } from './App.styled';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  updateFilter = data => {
    this.setState({
      filter: data,
    });
  };
  addNewContact = contact => {
    const contactsIncludes = this.state.contacts.map(({ name }) => name);
    if (!contactsIncludes.includes(contact.name)) {
      this.setState({
        contacts: [...this.state.contacts, contact],
      });
    } else alert('This contact already in phonebook');
  };
  deleteContact = deletedId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== deletedId),
    });
  };
  render() {
    return (
      <div>
        <Container>
          <Title>Phonebook</Title>
          <Form onSubmit={this.addNewContact} />
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter onChange={this.updateFilter} />
          {this.state.contacts.length ? (
            <ContactList
              contacts={this.state.contacts}
              onClick={this.deleteContact}
              filter={this.state.filter}
            />
          ) : (
            <span>no added yet</span>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
