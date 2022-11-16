/** @jsxImportSource @emotion/react */
import { useReducer } from 'react';
import { css } from '@emotion/react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context';
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

const inputField = css`
  width: 100%;
  margin-bottom: 20px;
`;

const createAccountBox = css`
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  padding: 10px;
  margin-top: 15px;
`;

const initialState = {
  password: '',
  email: '',

  emailValidationErr: '',
  passwordValidationErr: '',
};

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [state, dispatch] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    initialState
  );

  const validateInput = () => {
    const errors = {
      emailValidationErr: '',
      passwordValidationErr: '',
      isError: false,
    };
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

  const authenticateUser = () => {
    const isError = validateInput();
    if (!isError) {
      console.log('cool');
      auth.setAuth({ email: 'sample@gmail.com', displayName: 'Mrugesh' });
    }
  };

  const createAccount = () => {
    navigate('/signUp');
  };
  return (
    <div css={wrapper}>
      <h1>Login</h1>
      <div css={form}>
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
          id="email-address"
          label="Password"
          variant="outlined"
          sx={inputField}
          value={state.password}
          helperText={state.passwordValidationErr}
          onChange={(e) => valueChangeHandler(e.target.name, e.target.value)}
        />

        <Button variant="outlined" onClick={authenticateUser}>
          Login
        </Button>
        <div css={createAccountBox}>
          <span>Dont have an account?</span>
          <Button
            sx={{ display: 'inline' }}
            variant="text"
            onClick={createAccount}
          >
            Create account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
