import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';
import Post from './Post.js';

const Like = sequelize.define('Like', {});

User.hasMany(Like, { foreignKey: 'userId' });
Like.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Like, { foreignKey: 'postId' });
Like.belongsTo(Post, { foreignKey: 'postId' });

export default Like;
