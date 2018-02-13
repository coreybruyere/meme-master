import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    alertType: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      activeAlert: true,
    };
  };

  dismissAlert = () => {
    console.log('qwadd');
    this.setState({
      activeAlert: false,
    });
  };

  render() {
    const isOpenAlert = this.state.activeAlert;
    if (!isOpenAlert) {
      return null;
    }
    return (
      <div className={`alert alert--${this.props.alertType}`} role='alert'>
        <div className='alert__message'>
          {this.props.children}
        </div>

        <button
          className='alert__close'
          aria-label='Close Alert'
          onClick={this.dismissAlert}>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
    );
  }
}

export default Alert;