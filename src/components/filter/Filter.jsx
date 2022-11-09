import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Container, InputLabel } from './Filter.styled';
class Filter extends Component {
  constructor() {
    super();
    this.updateValue = this.updateValue.bind(this);
    this.state = {
      value: '',
    };
  }
  updateValue(e) {
    this.setState({
      value: e.target.value,
    });
    this.props.onChange(e.target.value);
  }
  render() {
    return (
      <Container>
        <InputLabel>
          Find by name
          <Input
            onChange={this.updateValue}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name can includes only letters"
            required
          />
        </InputLabel>
      </Container>
    );
  }
}
Filter.propTypes = {
  onChange: PropTypes.func,
};
export default Filter;
