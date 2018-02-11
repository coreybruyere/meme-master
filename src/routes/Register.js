import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Checkbox from '../components/Checkbox';
import SimpleInput from '../components/SimpleInput';

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fireRedirect: false,
      username: '',
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit= () => {
    this.setState({ fireRedirect: true })
  }

  render() {
    const { fireRedirect } = this.state

    return (
      <div>
        <h1>Register</h1>

        {/* This should be its own component :)  */}
        {/* Need to learn more about higher order components and how to pass state around more efficiently */}
        <input
          type='text'
          onChange={e => this.handleChange(e)}
          name='username'
          placeholder='Your Name'
          value={this.state.username}
        />

        <input
          type='text'
          onChange={e => this.handleChange(e)}
          name='email'
          placeholder='Your Email'
          value={this.state.email}
        />

        <input
          type='password'
          onChange={e => this.handleChange(e)}
          name='password'
          placeholder='Secret Password'
          value={this.state.password}
        />

        <Checkbox checked>Hi</Checkbox>

        {/* This should be its own component as well */}
        <button onClick={() => this.onSubmit()}>Button text</button>

        {fireRedirect && (
          <Redirect to={{
            pathname: '/login',
            state: { name: this.state.username }
          }} />
        )}
      </div>
    );
  }
}

export default Register;