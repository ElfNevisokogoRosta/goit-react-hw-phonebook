import React, { Component } from 'react';
import List from './list/list';
import Filter from './filter/Filter';
import Form from './form/Form';
class App extends Component {
  constructor() {
    super();
    this.updateFilter = this.updateFilter.bind(this);
    this.addNewContact = this.addNewContact.bind(this);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  updateFilter(data) {
    this.setState({
      filter: data,
    });
  }
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
        <h1>Phonebook</h1>
        <Form onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.updateFilter} />
        {this.state.contacts.length ? (
          <List
            contacts={this.state.contacts}
            onClick={this.deleteContact}
            filter={this.state.filter}
          />
        ) : (
          <span>no added yet</span>
        )}
      </div>
    );
  }
}

export default App;
