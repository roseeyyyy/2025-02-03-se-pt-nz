import { Post } from '../models/index.js';

export const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      image: req.file ? req.file.filename : null,
    });
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
