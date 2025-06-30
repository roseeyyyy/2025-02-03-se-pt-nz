import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';
import Post from './Post.js';

const Comment = sequelize.define('Comment', {
  content: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

export default Comment;
