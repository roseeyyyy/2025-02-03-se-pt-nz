import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const isLoggedIn = localStorage.getItem('currentUser') !== null;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Cookbook
        </Typography>

        <Button component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
        <Button component={Link} to="/recipes" sx={{ color: 'white' }}>Recipes</Button>
        
        {isLoggedIn ? (
          <Button onClick={handleLogout} sx={{ color: 'white' }}>Logout</Button>
        ) : (
          <Button component={Link} to="/login" sx={{ color: 'white' }}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar
