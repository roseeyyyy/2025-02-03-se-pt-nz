import Like from '../models/like.js';
import Post from '../models/post.js';

// Like a post
export const likePost = async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;

  try {
    // Check if post exists
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // Check if like already exists
    const existingLike = await Like.findOne({ post: postId, user: userId });
    if (existingLike) {
      return res.status(400).json({ message: 'You already liked this post' });
    }

    // Create new like
    const like = new Like({ post: postId, user: userId });
    await like.save();

    res.status(201).json({ message: 'Post liked successfully', like });
  } catch (error) {
    res.status(500).json({ message: 'Error liking post', error });
  }
};

// Unlike a post
export const unlikePost = async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;

  try {
    // Check if like exists
    const existingLike = await Like.findOne({ post: postId, user: userId });
    if (!existingLike) {
      return res.status(400).json({ message: 'You have not liked this post yet' });
    }

    await Like.findByIdAndDelete(existingLike._id);

    res.status(200).json({ message: 'Post unliked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error unliking post', error });
  }
};

// Get number of likes for a post
export const getPostLikes = async (req, res) => {
  const { postId } = req.params;

  try {
    // Check if post exists
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const likes = await Like.find({ post: postId }).populate('user', 'username');

    res.status(200).json({
      postId,
      totalLikes: likes.length,
      likedBy: likes.map(like => like.user)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching likes', error });
  }
};
