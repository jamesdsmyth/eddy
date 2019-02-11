import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
  render() {
    return (
      <div>{this.props.message}</div>
    )
  }
}

Hello.propTypes = {
  message: PropTypes.string
}

export default Hello;