import express from 'express';
import cors from 'cors';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import lugaresRoutes from './routes/lugares.js';

// Define __dirname corretamente (caminho de app.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Caminho para a pasta public (um nível acima)
const publicPath = join(__dirname, '..', 'public');

const app = express();

app.use(cors());
app.use(express.json());

// Servir arquivos estáticos de ../public
app.use(express.static(publicPath));

// Página principal
app.get('/', (req, res) => {
  res.sendFile(join(publicPath, 'index.html'));
});

// API de lugares
app.use('/lugares', lugaresRoutes);

export default app;
