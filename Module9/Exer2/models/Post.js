import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, required: true },
  image:       { type: String },
  user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes:       [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt:   { type: Date, default: Date.now },
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;
