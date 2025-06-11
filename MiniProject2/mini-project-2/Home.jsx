import React from 'react'
import { Container, Typography} from '@mui/material';


function Home() {
  return (
    <Container sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Online Cookbook! 🍳
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Explore delicious recipes, search your favorites, and save ideas for your next meal.
      </Typography>
    </Container>
  );
}

export default Home
