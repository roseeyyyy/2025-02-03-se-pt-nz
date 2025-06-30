import express from 'express';
import { readFile } from 'fs/promises';
import db from './models/index.js';
import productRoutes from './routes/productRoutes.js';
import swaggerUi from 'swagger-ui-express';
import { fetchAndStoreProducts } from './services/fetchService.js';

const app = express();

const swaggerDocument = JSON.parse(
  await readFile(new URL('./swagger/swagger.json', import.meta.url))
);

app.use(express.json());
app.use('/api/products', productRoutes);

db.sequelize.sync().then(async () => {
  console.log('Database synced.');
  await fetchAndStoreProducts();

  app.listen(3000, () =>
    console.log('Server running at http://localhost:3000')
  );
});
