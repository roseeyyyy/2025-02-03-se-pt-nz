import db from '../models/index.js';

const Product = db.Product;

export const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  product ? res.json(product) : res.status(404).json({ message: 'Product not found' });
};

export const createProduct = async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json(newProduct);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (product) {
    await product.update(req.body);
    res.json(product);
  } else res.status(404).json({ message: 'Product not found' });
};

export const deleteProduct = async (req, res) => {
  const deleted = await Product.destroy({ where: { id: req.params.id } });
  deleted ? res.json({ message: 'Product successfully deleted' }) : res.status(404).json({ message: 'Product not found' });
};
