import axios from 'axios';
import db from '../models/index.js';

export const fetchAndStoreProducts = async () => {
  const { Product } = db;
  const count = await Product.count();

  if (count === 0) {
    const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
    const products = response.data;

    const productsToInsert = products.map(item => ({
      brand: item.brand,
      name: item.name,
      price: item.price,
      image_link: item.image_link,
      description: item.description,
      product_type: item.product_type,
      product_api_id: item.id
    }));

    await Product.bulkCreate(productsToInsert);
    console.log('Database populated.');
  } else {
    console.log('Products already migrated.')
  }
};
