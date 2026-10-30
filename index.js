const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hola Mundo</title>
  <style>
    body { font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 100vh; margin: 0; background: #1d1e20; color: #fff; }
    h1 { font-size: 3rem; }
  </style>
</head>
<body>
  <main>
    <h1>¡Hola Mundo! 👋</h1>
    <p>Mi primera app Node.js en Hostinger.</p>
  </main>
</body>
</html>`);
});

app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola Mundo', fecha: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
