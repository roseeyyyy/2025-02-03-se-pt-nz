import sequelize from '../config/db.js';
import User from './User.js';
import Post from './Post.js';
import Comment from './Comment.js';
import Like from './Like.js';

const syncDB = async () => {
  await sequelize.sync({ alter: true });
  console.log('All models synced!');
};

export { User, Post, Comment, Like, syncDB };
