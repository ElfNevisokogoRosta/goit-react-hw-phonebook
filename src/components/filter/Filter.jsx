import React, { Component } from 'react';

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
      <div>
        <input
          onChange={this.updateValue}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name can includes only letters"
          required
        />
      </div>
    );
  }
}

export default Filter;
