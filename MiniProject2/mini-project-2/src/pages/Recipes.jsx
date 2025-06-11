import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActions, TextField, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import recipess from '../data/recipess';

function Recipes() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  // Load recipes from localStorage + hardcoded list on mount
  useEffect(() => {
    const localRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes([...recipess, ...localRecipes]);
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        🍽️ My Recipes
      </Typography>

      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
        <TextField
          label="Search recipes"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: '300px' }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button variant="contained" onClick={() => navigate('/add-recipe')}>
          Add New Recipe
        </Button>
      </Box>

      <Grid container spacing={4}>
        {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        image={recipe.image}
                        alt={recipe.title}
                        sx={{
                        height: 200,
                        objectFit: 'cover'
                    }}/>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="div">
              {recipe.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              component={Link}
              to={`/recipes/${recipe.id}`}
              variant="contained"
              fullWidth
            >
              View Recipe
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ))
  ) : (
    <Typography variant="h6" align="center" sx={{ width: '100%', mt: 5 }}>
      No recipes found.
    </Typography>
  )}
    </Grid>

    </Container>
  );
}

export default Recipes;
