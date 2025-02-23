const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personasRoutes = require('./routes/persona.routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/personas', personasRoutes);

// Conexión a la base de datos
mongoose.connect('mongodb+srv://20233tn112:VaNJ25041003@firstcluster.qxah3.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=FirstCluster', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Conexión exitosa a la base de datos a MongoDB');
    app.listen(PORT, () => console.log(`Servidor corriendo en https://localhost:${PORT}`));
})
.catch((err) => console.log('Error al conectar en MongoDB', err));


