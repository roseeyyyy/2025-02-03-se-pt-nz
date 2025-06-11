import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute'
import Home from '../Home'
import Login from '../Login'
import NavBar from '../NavBar'
import Recipes from '../Recipes'
import RecipeDetails from '../RecipeDetails'
import AddRecipe from '../AddRecipe'
import recipess from '../recipess'
import { Box } from '@mui/material'

function App() {
  const [recipes, setRecipes] = useState(recipess);

  return (
    <Router>
      <NavBar />
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 3 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipes" element={<Recipes recipes={recipess} />} />
        <Route path="/recipes/:id" element={<PrivateRoute><RecipeDetails recipes={recipess} /></PrivateRoute>} />
        <Route path="/add-recipe" element={<PrivateRoute><AddRecipe recipes={recipes} setRecipes={setRecipes} /></PrivateRoute> } />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
      </Box>
    </Router>
  );
}

export default App;
