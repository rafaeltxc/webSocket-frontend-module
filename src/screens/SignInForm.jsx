import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Form.module.css';
import ParticlesJs from './Particles';

function Login({ signInSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState({
    User: '',
    Password: '',
  });

  function userHandler(event) {
    setInputValue({ ...inputValue, User: event.target.value });
  }

  function passwordHandler(event) {
    setInputValue({ ...inputValue, Password: event.target.value });
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={styles.root}>
      <ParticlesJs />
      <form onSubmit={signInSubmit} className={styles.signIn}>
        <TextField
          id="outlined-basic"
          className={styles.input}
          label="Login"
          variant="outlined"
          type="text"
          value={inputValue.User}
          onChange={userHandler}
          InputLabelProps={{
            style: {
              color: 'black',
            },
          }}
        />
        <FormControl sx={{ m: 1, width: '280px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" style={{ color: 'black' }}>
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={inputValue.Password}
            onChange={passwordHandler}
          />
        </FormControl>
      </form>
      <p className={styles.p}>Don't have an account?</p>
      <Link to={'/sign-up'} className={styles.anchor}>
        Sign Up
      </Link>
    </div>
  );
}

export default Login;
