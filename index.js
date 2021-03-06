const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors('*'));
app.use(express.json());
app.use( require('./src/routes/main'));

const port = process.env.PORT;
app.listen(port, err => {
    if (err) throw err;
    console.log('Servidor corriendo en el puerto', port);
});