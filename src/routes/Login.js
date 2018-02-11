import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        hi <br />
        {this.props.location.state.name}
      </div>
    );
  }
}

export default Login;