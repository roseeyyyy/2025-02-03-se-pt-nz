import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AddRecipe() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch existing recipes from localStorage
    const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

    // Generate new unique ID based on the highest current ID
    const maxId = existingRecipes.length
      ? Math.max(...existingRecipes.map((r) => Number(r.id)))
      : 0;

    const newRecipe = {
      id: maxId + 1,
      title,
      image,
      ingredients: ingredients.split(',').map((i) => i.trim()),
      instructions
    };

    // Save the new recipe
    const updatedRecipes = [...existingRecipes, newRecipe];
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

    // Show success, reset form, then navigate
    setOpen(true);
    setTitle('');
    setImage('');
    setIngredients('');
    setInstructions('');

    setTimeout(() => navigate('/recipes'), 1000);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Add a New Recipe</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <TextField label="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <TextField label="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <TextField label="Instructions" multiline rows={4} value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        <Button type="submit" variant="contained">Add Recipe</Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        message="Recipe added!"
        onClose={() => setOpen(false)}
      />
    </Container>
  );
}

export default AddRecipe;
