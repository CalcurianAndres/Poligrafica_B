const express = require('express');


const app = express();

//rutas que se utilizaran en el sistema
app.use ( require('./maquinaria.routes'));
app.use ( require('./grupos.routes'));
app.use ( require('./clientes.routes'));
app.use ( require('./productos.routes'));
app.use ( require('./trabajos.routes'));
app.use ( require('./materiales.routes'));
app.use ( require('./orden.routes'));



module.exports = app;