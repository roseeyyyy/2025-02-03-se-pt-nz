import express from 'express';
import { likePost, unlikePost, getPostLikes } from '../controllers/likeController.js';

const router = express.Router();

router.post('/:postId', likePost);        // Like a post
router.post('/:postId/unlike', unlikePost); // Unlike a post
router.get('/:postId', getPostLikes);     // Get likes for a post

export default router;
