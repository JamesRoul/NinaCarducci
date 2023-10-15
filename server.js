const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

// Configurar caché para recursos estáticos (imágenes, CSS y JavaScript).
const oneDay = 86400000; // 1 día en milisegundos
app.use(express.static(path.join(__dirname, ), { maxAge: oneDay }));

// Manejar las solicitudes HTTP GET para la ruta raíz ('/').
app.get('/', (req, res) => {
  // Cuando alguien acceda a la ruta raíz, se enviará el archivo 'index.html'
  // desde el directorio 'public' como respuesta.
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});