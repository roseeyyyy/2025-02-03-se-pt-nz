import { Comment } from '../models/index.js';

export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
