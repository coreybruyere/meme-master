import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    checked: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  };

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { disabled } = this.props;
    const { checked } = this.state;

    return (
      <div>
        <label>
          <input
            type='checkbox'
            className=''
            checked={checked}
            disabled={disabled}
            onChange={this.handleChange}
          />
          {this.props.children}
        </label>
      </div>
    );
  }
}

export default Checkbox;