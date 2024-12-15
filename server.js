const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/api/habitaciones', (req, res) => {
    const habitaciones = [
        { id: 1, nombre: 'Habitación Deluxe', descripcion: 'Con todas las comodidades para su estancia.' },
        { id: 2, nombre: 'Habitación Doble', descripcion: 'Ideal para familias o grupos pequeños.' },
        { id: 3, nombre: 'Habitación Romántica', descripcion: 'Perfecta para ocasiones especiales.' }
    ];
    res.json(habitaciones);
});


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
