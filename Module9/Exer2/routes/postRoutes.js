import express from 'express';
import multer from 'multer';
import { createPost, likePost } from '../controllers/postController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/posts', upload.single('image'), createPost);
router.post('/posts/:id/like', likePost);

export default router;
