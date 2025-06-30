import Sequelize from 'sequelize';
import { readFile } from 'fs/promises';
import ProductModel from './product.js';

// Load config.json dynamically
const configJson = JSON.parse(
  await readFile(new URL('../config/config.json', import.meta.url))
);

const config = configJson.development;

// Initialize Sequelize
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = ProductModel(sequelize, Sequelize.DataTypes);

export default db;
