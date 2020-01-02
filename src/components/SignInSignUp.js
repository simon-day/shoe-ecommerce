import React from 'react';
import './SignInSignUp.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';

const SignInSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
