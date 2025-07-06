// index.js
require('dotenv').config();
require('./db.js');

const cors = require('cors')
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());


//Catalogos
const peliculasRoutes = require('./routes/peliculas');
app.use('/api/peliculas', peliculasRoutes)

// Ruta de prueba
app.get('/api', (_req: any, res: any) => {
  res.send('¡Bienvenido a CineMatch API!');
});


// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
