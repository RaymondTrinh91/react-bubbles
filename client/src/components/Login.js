import React, { useState } from "react";
import { connect } from 'react-redux'

import { postLogin } from '../actions'

const Login = (props) => {
  const [loginValues, setLoginValues] = useState({ username: '', password: '' })
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChanges = e => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.postLogin(loginValues)
    props.history.push('/bubbles')
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name='username'
          type='text'
          onChange={handleChanges}
          value={loginValues.username}
        />
        <label>Password</label>
        <input
          name='password'
          type='text'
          onChange={handleChanges}
          value={loginValues.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default connect(state => state, { postLogin })(Login);
