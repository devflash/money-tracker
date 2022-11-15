/** @jsxImportSource @emotion/react */

import { useReducer } from 'react';
import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const wrapper = css`
  width: 90%;
  max-width: 550px;
  margin: 0 auto;
  padding: 15px;
  h1 {
    text-align: left;
  }
`;

const form = css`
  margin-top: 20px;
`;

const fieldGroup = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const inlineFields = css`
  flex: 0 1 48%;
`;

const inputField = css`
  width: 100%;
  margin-bottom: 20px;
`;

const initialState = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  firstNameValidationErr: '',
  lastNameValidationErr: '',
  emailValidationErr: '',
  passwordValidationErr: '',
};
const SignUp = () => {
  const [state, dispatch] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    initialState
  );

  const validateInput = () => {
    const errors = {
      firstNameValidationErr: '',
      lastNameValidationErr: '',
      emailValidationErr: '',
      passwordValidationErr: '',
      isError: false,
    };
    if (!state.firstName) {
      errors.firstNameValidationErr = 'Please enter first name';
      errors.isError = true;
    }

    if (!state.lastName) {
      errors.lastNameValidationErr = 'Please enter last name';
      errors.isError = true;
    }

    if (!state.email) {
      errors.emailValidationErr = 'Please enter email address';
      errors.isError = true;
    }

    if (!state.password) {
      errors.passwordValidationErr = 'Please enter password';
      errors.isError = true;
    }
    if (errors.isError) {
      dispatch(errors);
    }
    return errors.isError;
  };

  const valueChangeHandler = (name, value) => {
    dispatch({ [name]: value, [`${name}ValidationErr`]: '' });
  };

  const createAccount = () => {
    const isError = validateInput();
    if (!isError) {
      console.log('cool');
    }
  };

  return (
    <div css={wrapper}>
      <h1>Create Account</h1>
      <div css={form}>
        <div css={fieldGroup}>
          <TextField
            error={!!state.firstNameValidationErr}
            required
            name="firstName"
            type="text"
            id="first-name"
            label="First name"
            variant="outlined"
            sx={inlineFields}
            value={state.firstName}
            helperText={state.firstNameValidationErr}
            onChange={(e) => valueChangeHandler(e.target.name, e.target.value)}
          />
          <TextField
            error={!!state.lastNameValidationErr}
            required
            name="lastName"
            type="text"
            id="last-name"
            label="Last name"
            variant="outlined"
            sx={inlineFields}
            value={state.lastName}
            helperText={state.lastNameValidationErr}
            onChange={(e) => valueChangeHandler(e.target.name, e.target.value)}
          />
        </div>
        <TextField
          error={!!state.emailValidationErr}
          required
          name="email"
          type="email"
          id="email-address"
          label="Email address"
          variant="outlined"
          sx={inputField}
          value={state.email}
          helperText={state.emailValidationErr}
          onChange={(e) => valueChangeHandler(e.target.name, e.target.value)}
        />
        <TextField
          error={!!state.passwordValidationErr}
          required
          name="password"
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          sx={inputField}
          value={state.password}
          helperText={state.passwordValidationErr}
          onChange={(e) => valueChangeHandler(e.target.name, e.target.value)}
        />

        <Button variant="outlined" onClick={createAccount}>
          Create account
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
