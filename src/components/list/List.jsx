import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListSecction, ListElement, Button } from './List.styled';
export default class List extends Component {
  sendId(id) {
    this.props.onClick(id);
  }
  render() {
    return (
      <ListSecction>
        {this.props.contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <ListElement key={id}>
              {name} : {number}
              <span> </span>
              <Button onClick={() => this.sendId(id)} key={id}>
                Delete
              </Button>
            </ListElement>
          ))}
      </ListSecction>
    );
  }
}
List.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
