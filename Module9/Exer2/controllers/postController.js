import Post from '../models/Post.js';

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

export const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.likes.push(req.body.userId);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
