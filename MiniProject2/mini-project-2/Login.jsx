import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (isSignUp) {
      const userExists = existingUsers.find((user) => user.username === username);
      if (userExists) {
        setError('Username already exists.');
        return;
      }

      const newUser = { username, password };
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      alert('Account created successfully! You can now log in.');
      setIsSignUp(false);
      setUsername('');
      setPassword('');
      setError('');
    } else {
      const matchedUser = existingUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (matchedUser) {
        localStorage.setItem('currentUser', JSON.stringify(matchedUser));
        navigate('/home');
      } else {
        setError('Invalid username or password.');
      }
    }
  };

  return (
    <Container sx={{ mt: 8, textAlign: 'center', maxWidth: 400 }}>
      <Box>
        <Typography variant="h4" gutterBottom>
          {isSignUp ? 'Create Account' : 'Welcome to My Cookbook'}
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            required
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            {isSignUp ? 'Create Account' : 'Login'}
          </Button>
        </form>

        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            {isSignUp ? 'Already have an account?' : 'New here?'}
            &nbsp;
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError('');
              }}
            >
              {isSignUp ? 'Login' : 'Create Account'}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
