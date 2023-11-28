import TextField from '@mui/material/TextField';
import { useState } from 'react';
import masks from '../utils/masks';
import { Link } from 'react-router-dom';
import styles from '../styles/Form.module.css';
import ParticlesJs from './Particles';

function signUpForm({ SignUpSubmit }) {
  const [inputValue, setInputValue] = useState({
    Email: '',
    Username: '',
    Phone: '',
    Password: '',
    PasswordConf: '',
  });

  function emailHandler(event) {
    setInputValue({
      ...inputValue,
      Email: event.target.value,
    });
  }

  function usernameHandler(event) {
    setInputValue({
      ...inputValue,
      Username: event.target.value,
    });
  }

  function phoneHandler(event) {
    const maskedPhone = masks.maskPhone(event.target.value);

    setInputValue({
      ...inputValue,
      Phone: maskedPhone,
    });
  }

  function passwordHandler(event) {
    setInputValue({
      ...inputValue,
      Password: event.target.value,
    });
  }

  function passwordConfHandler(event) {
    setInputValue({
      ...inputValue,
      PasswordConf: event.target.value,
    });
  }

  return (
    <div className={styles.root}>
      <ParticlesJs />
      <form onSubmit={SignUpSubmit} className={styles.signUp}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          value={inputValue.Email}
          onChange={emailHandler}
          size="small"
          className={styles.input}
          InputLabelProps={{
            style: {
              color: 'black',
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          type="text"
          value={inputValue.Username}
          onChange={usernameHandler}
          size="small"
          className={styles.input}
          inputProps={{
            maxLength: 16,
          }}
          InputLabelProps={{
            style: {
              color: 'black',
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          type="tel"
          value={inputValue.Phone}
          onChange={phoneHandler}
          size="small"
          className={styles.input}
          inputProps={{
            maxLength: 15,
          }}
          InputLabelProps={{
            style: {
              color: 'black',
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={inputValue.Password}
          onChange={passwordHandler}
          size="small"
          className={styles.input}
          inputProps={{
            minLength: 3,
          }}
          InputLabelProps={{
            style: {
              color: 'black',
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password Confirmation"
          variant="outlined"
          type="password"
          value={inputValue.PasswordConf}
          onChange={passwordConfHandler}
          size="small"
          className={styles.input}
          inputProps={{
            minLength: 3,
          }}
          InputLabelProps={{
            style: {
              color: 'black',
            },
          }}
        />
      </form>
      <p className={styles.p}>Already have an account?</p>
      <Link to={'/sign-in'} className={styles.anchor}>
        Sign In
      </Link>
    </div>
  );
}

export default signUpForm;
