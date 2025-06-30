import express from 'express';
import multer from 'multer';
import { createPost } from '../controllers/postController.js';

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/posts', upload.single('image'), createPost);

export default router;
