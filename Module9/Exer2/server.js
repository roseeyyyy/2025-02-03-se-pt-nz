import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import likeRoutes from './routes/likeRoutes.js';

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api/likes', likeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
