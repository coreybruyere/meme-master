import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Checkbox from '../components/Checkbox';
import Card from '../components/Card';

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

  onSubmit = () => {
    const userIsCreated =
      this.state.username &&
      this.state.email &&
      this.state.password;
    if (userIsCreated) {
      this.setState({ fireRedirect: true })
    } else {
      alert('Howdy, please be sure to fill out all fields!');
    }
  }

  render() {
    const { fireRedirect } = this.state

    return (
      <Card smallImgSrc='https://placeimg.com/400/100/animals' largeImgSrc='https://placeimg.com/800/200/animals'>
        <h1 className='mb-4'>Join Meme Master!</h1>

        <p className='mb-4'>Ready to contribute to the world's largest database of memes? Just give us some info and we'll be contacting you shortly!<small className='block mt-2'>(Please be ready to provide SSN, favorite food, color of eyes, etc.)</small></p>

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

        <Checkbox checked>Memes are the future of all forms of comedy.</Checkbox>

        {/* This should be its own component as well */}
        <button className='button button--large' onClick={() => this.onSubmit()}>Submit Personal Information</button>

        {fireRedirect && (
          <Redirect to={{
            pathname: '/welcome',
            state: { name: this.state.username }
          }} />
        )}
      </Card>
    );
  }
}

export default Register;