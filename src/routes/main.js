const app = require('express')();

app.use('/users', require('./users/users.auth'));
app.use('/surverys/ficha_identificacion/', require('./surveys/ficha_identificacion'));
app.use('/surverys/estudio_socioeconomico/', require('./surveys/estudio_socioeconomico'));
app.use('/surverys/formato_entrevista/', require('./surveys/formato_entrevista'));
module.exports = app;