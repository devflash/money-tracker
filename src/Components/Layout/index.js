/** @jsxImportSource @emotion/react */
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const link = css`
  text-decoration: none;
  color: #fff;
`;

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div">
            Money Tracker
          </Typography>
          <Link to="/login" css={link}>
            Login
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
};

export default Layout;
