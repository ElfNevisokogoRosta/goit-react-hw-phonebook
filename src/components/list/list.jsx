import React, { Component } from 'react';

export default class List extends Component {
  sendId(id) {
    this.props.onClick(id);
  }
  render() {
    return (
      <ul>
        {this.props.contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <li key={id}>
              {name} : {number}
              <span> </span>
              <button onClick={() => this.sendId(id)} key={id}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}
List.propTypes = {};
