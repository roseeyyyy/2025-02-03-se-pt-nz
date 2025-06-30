import express from 'express';
import { readFile } from 'fs/promises';
import db from './models/index.js';
import productRoutes from './routes/productRoutes.js';
import { fetchAndStoreProducts } from './services/fetchService.js';

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

db.sequelize.sync().then(async () => {
  console.log('Database synced.');
  await fetchAndStoreProducts();

  app.listen(3000, () =>
    console.log('Server running at http://localhost:3000')
  );
});
