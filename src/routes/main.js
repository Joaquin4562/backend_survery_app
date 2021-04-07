const app = require('express')();

app.use('/users', require('./users/users.auth'));
app.use('/surverys/ficha_identificacion/', require('./surveys/ficha_identificacion'));
module.exports = app;