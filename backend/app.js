import express from 'express';
import cors from 'cors';
import lugaresRoutes from './routes/lugares.js';

import path from 'path';

const __dirname = path.dirname('indexe.html');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')))


// Usa as rotas dos lugares
app.use('/lugares', lugaresRoutes);

export default app;