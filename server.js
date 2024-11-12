const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos (opcional)
app.use(express.static('public'));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
