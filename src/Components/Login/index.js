/** @jsxImportSource @emotion/react */
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

const inputField = css`
  width: 100%;
  margin-bottom: 20px;
`;

const Login = () => {
  return (
    <div css={wrapper}>
      <h1>Login</h1>
      <div css={form}>
        <TextField
          type="email"
          id="email-address"
          label="Email address"
          variant="outlined"
          sx={inputField}
        />
        <TextField
          type="password"
          id="email-address"
          label="Password"
          variant="outlined"
          sx={inputField}
        />

        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
};

export default Login;
