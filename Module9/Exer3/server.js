import express from 'express';
import bodyParser from 'body-parser';
import { syncDB } from './models/index.js';

import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', commentRoutes);

const PORT = 5000;
app.listen(PORT, async () => {
  await syncDB();
  console.log(`Server running on port ${PORT}`);
});
