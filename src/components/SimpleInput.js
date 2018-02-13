import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleInput extends Component {
  static propTypes = {
    val: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      val: e.target.value
    });
  };

  render() {
    return (
      <div>
        <label>
          {this.props.label}

          <input
            className=''
            value={this.props.val}
            type={this.props.type}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={e => this.handleChange(e)}
          />
        </label>
      </div>
    );
  }
}

export default SimpleInput;