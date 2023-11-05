const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');

const port = 3000;


const oneYear = 1000 * 60 * 60 * 24 * 365; 
app.use(compression());
app.use(express.static(path.join(__dirname, ), { maxAge: oneYear }));

app.get('/', (req, res) => {
  
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});