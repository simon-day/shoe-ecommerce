import React, { Component } from 'react';
import FormInput from './FormComponents/FormInput';
import CustomButton from './FormComponents/CustomButton';
import { auth, createUserProfileDocument } from '../firebase/FirebaseUtils';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log('There was an error signing up ', error.message);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            label="name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            label="confirm password"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          ></FormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
