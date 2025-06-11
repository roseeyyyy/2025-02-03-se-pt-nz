const recipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    image: "https://www.preciouscore.com/wp-content/uploads/2024/06/Spaghetti-Bolognese-Chicken.jpg",
    ingredients: [
      "200g spaghetti",
      "100g minced beef",
      "1 can tomato sauce",
      "1 onion",
      "2 cloves garlic",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: "Cook spaghetti according to package instructions. In a pan, sauté onion and garlic in olive oil. Add minced beef and cook until browned. Pour in tomato sauce and simmer for 15 minutes. Season with salt and pepper. Serve over spaghetti."
  },
  {
    id: 2,
    title: "Pork Adobo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmww5jTG0tVGxjPAoMtgYndRrcCm-NtAjyOQ&s",
    ingredients: [
      "2 lbs pork belly",
      "5 dried bay leaves ",
      "2 tablespoons garlic",
      "4 tablespoons vinegar",
      "1 tablespoon peppercorn",
      "2 cups water",
      "Salt"
    ],
    instructions: "Combine the pork belly, soy sauce, and garlic then marinade for at least 1 hour 2 lbs pork belly, 1/2 cup soy sauce, 2 tablespoons garlic Heat the pot and put-in the marinated pork belly then cook for a few minutes Pour remaining marinade including garlic. Add water, whole pepper corn, and dried bay leaves then bring to a boil. Simmer for 40 minutes to 1 hour 1 tablespoon peppercorn, 2 cups water, 5 dried bay leaves. Put-in the vinegar and simmer for 12 to 15 minutes. 4 tablespoons vinegar. Add salt to taste."
  },
   {
    id: 3,
    title: 'Sinigang na Baboy',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJsdIhy7GjXD2mDCE4VY1a_aFGqnQ6m2ztsA&s',
    ingredients: [
      '1 kg pork belly, cut into chunks',
      '2 tomatoes, quartered',
      '1 onion, quartered',
      '1 pack sinigang mix (or fresh tamarind)',
      '1 bunch kangkong (water spinach)',
      '8 cups water',
      'Radish, eggplant, okra, string beans',
      'Salt and fish sauce to taste'
    ],
    instructions:
      'Boil pork in water until tender. Add onions and tomatoes, cook until soft. Add vegetables except kangkong. Stir in sinigang mix or fresh tamarind. Simmer until veggies are tender. Season with salt and fish sauce. Add kangkong last before serving.'
  },
  {
    id: 4,
    title: 'Kare-Kare',
    image: 'https://www.maggi.ph/sites/default/files/srh_recipes/3eb553f39b3c0d978fbb90169fb3d6a5.jpg',
    ingredients: [
      '1 kg oxtail, beef shank, or pork hocks',
      '1/2 cup peanut butter',
      '1/4 cup ground toasted rice',
      '2 eggplants, sliced',
      '1 banana heart, sliced',
      '1 bunch string beans',
      '1 bunch pechay (bok choy)',
      '1 onion, chopped',
      'Annatto oil (for color)',
      'Shrimp paste (bagoong)'
    ],
    instructions:
      'Boil meat until tender. In another pan, sauté onions. Add annatto oil, peanut butter, and ground rice dissolved in water. Add boiled meat and simmer. Add vegetables and cook until tender. Serve with bagoong on the side.'
  },
  {
    id: 5,
    title: 'Pancit Canton',
    image: 'https://www.maggi.ph/sites/default/files/styles/image_744_x_419/public/srh_recipes/5b661360b8e49f5c2348c06858bb8f57.jpg?h=4f5b30f1&itok=Cfjf498z',
    ingredients: [
      '500g pancit canton noodles',
      '200g chicken breast, sliced',
      '200g shrimp, peeled',
      '1 cup cabbage, shredded',
      '1 carrot, sliced',
      '1/2 cup snow peas',
      '1 onion, chopped',
      '3 cloves garlic, minced',
      '1/4 cup soy sauce',
      '2 cups chicken broth',
      'Salt and pepper to taste'
    ],
    instructions:
      'Sauté garlic and onion. Add chicken and shrimp, cook until done. Pour in broth and soy sauce. Add vegetables, cook briefly. Add noodles, stir and cook until liquid is absorbed and noodles are soft. Season with salt and pepper.'
  },
  {
    id: 6,
    title: 'Leche Flan',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8hF_qiDZwV0MedSBImLsm0zj85yUma9LtiQ&s',
    ingredients: [
      '10 egg yolks',
      '1 can condensed milk',
      '1 can evaporated milk',
      '1 tsp vanilla extract',
      '1 cup sugar (for caramel)'
    ],
    instructions:
      'Melt sugar in a pan to make caramel, pour into llanera or mold. In a bowl, mix egg yolks, condensed milk, evaporated milk, and vanilla. Pour mixture into mold. Steam for 30–35 minutes or bake in a water bath at 180°C for 45 minutes. Chill before serving.'
  },
  {
    id: 7,
    title: "Pancakes",
    image: "https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg",
    ingredients: [
      "1 cup flour",
      "1 cup milk",
      "1 egg",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "Pinch of salt",
      "Butter"
    ],
    instructions: "In a bowl, mix flour, sugar, baking powder, and salt. Whisk in milk and egg until smooth. Heat butter in a pan. Pour batter and cook until bubbles form, flip and cook the other side. Serve with your favorite toppings."
  },
  {
    id: 8,
    title: "Laing",
    image: "https://www.foxyfolksy.com/wp-content/uploads/2017/11/laing-recipe-2-500x500.jpg",
    ingredients: [
      "Dried taro leaves",
      "1 can coconut milk",
      "1 can coconut cream",
      "Dried fish or pork",
      "Chili",
      "Onion",
      "Garlic"
    ],
    instructions: "Sauté garlic and onion. Add coconut milk and taro leaves. Simmer until soft. Add fish and coconut cream. Season to taste."
  },
  {
    id: 9,
    title: "Bistek Tagalog",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPMjIMrFDWzXbb3lvnvHOqzwIVpzlVaH3rw&s",
    ingredients: [
      "500g beef sirloin, thinly sliced",
      "1/4 cup soy sauce",
      "1/4 cup calamansi juice",
      "Onion rings",
      "Garlic",
      "Pepper"
    ],
    instructions: "Marinate beef in soy sauce and calamansi. Fry onions, set aside. Sauté beef with garlic. Add onions on top before serving."
  },
  {
    id: 10,
    title: "Chicken Inasal",
    image: "https://www.pinoychismix.com/wp-content/uploads/2023/02/mang-inasal-1.jpg",
    ingredients: [
      "1 kg chicken legs",
      "1/2 cup vinegar",
      "1/4 cup calamansi juice",
      "1/4 cup soy sauce",
      "Garlic",
      "Lemongrass",
      "Annatto oil"
    ],
    instructions: "Marinate chicken. Grill over hot coals while basting with annatto oil until cooked through."
  },
  {
    id: 11,
    title: "Ginataang Bilo-Bilo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHJtQUZl704y-dVJUYaRH3zVkKO-bqTweFA&s",
    ingredients: [
      "Glutinous rice balls",
      "1 can coconut milk",
      "Sweet potato, cubed",
      "Saba banana, sliced",
      "Jackfruit strips",
      "Sugar"
    ],
    instructions: "Boil coconut milk. Add sweet potato and rice balls. Add saba and jackfruit. Simmer and sweeten to taste."
  }
];

export default recipes;
