import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };


  render() {
    return (
      <div>
        <button>{this.props.children}</button>
      </div>
    );
  }
}

export default Button;