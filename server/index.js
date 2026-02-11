// server/index.js
const express = require('express');
const cors = require('cors');
const supabase = require('./supabase');
const app = express();
const PORT = 3000;

// Middleware (puente de comunicación)
app.use(cors()); // permite las conexiones externas
app.use(express.json()); // Permite que el servidor entienda datos en formato JSON

// Ruta de prueba
app.get('/', (req, res) => {
    res.send ('Backend del inventario funcionando correctamente');
    });

    // Arrancar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor funcionado en http://localhost:${PORT}`);
        });
