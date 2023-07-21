import React from 'react';
import PropTypes from 'prop-types';
import { ListSecction, ListElement, Button } from './List.styled';
const ContactList = ({ contacts, filter, onClick }) => {
  const deleteById = id => {
    onClick(id);
  };
  return (
    <ListSecction>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => (
          <ListElement key={id}>
            {name} : {number}
            <span> </span>
            <Button onClick={() => deleteById(id)} key={id}>
              Delete
            </Button>
          </ListElement>
        ))}
    </ListSecction>
  );
};

ContactList.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
export default ContactList;
