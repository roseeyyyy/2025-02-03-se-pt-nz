import React from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

function Login() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box component="form">
          <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 3 }} />
          <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mb: 3 }} />
          <Button variant="contained" color="primary" fullWidth>
            Log In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login
