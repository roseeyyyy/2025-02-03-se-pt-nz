import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, List, ListItem, ListItemText, Button, Box } from '@mui/material';
import recipess from '../data/recipess';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const localRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const combinedRecipes = [...recipess, ...localRecipes];
    const foundRecipe = combinedRecipes.find((item) => String(item.id) === id);
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5">Recipe not found.</Typography>
        <Button component={Link} to="/recipes" variant="contained" sx={{ mt: 2 }}>
          Back to Recipes
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="350"
          image={recipe.image}
          alt={recipe.title}
          sx={{ objectFit: 'fill' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {recipe.title}
          </Typography>

          <Typography variant="h6">Ingredients:</Typography>
          <List>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Instructions:
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {recipe.instructions}
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Button component={Link} to="/recipes" variant="contained">
              Back to Recipes
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default RecipeDetails;
