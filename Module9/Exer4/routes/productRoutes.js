import express from 'express';
import {
  getAllProducts,
  getProductById,
  updateProduct
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);

export default router;
