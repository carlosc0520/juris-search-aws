const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('¡Bienvenido a mi API!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`ESTAMOS LANZANDO EL SERVIDOR ${PORT}`);
});
