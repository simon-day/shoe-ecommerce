import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from './FormComponents/FormInput';
import CustomButton from './FormComponents/CustomButton';
import { signInWithGoogle } from '../firebase/FirebaseUtils';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            type="email"
            label="email"
            required
          />

          <FormInput
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            type="password"
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {' '}
              Sign In with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
