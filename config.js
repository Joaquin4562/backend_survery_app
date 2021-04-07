const mysql = require('mysql')
const getConnection = () => mysql.createConnection({
    host: 'sql138.main-hosting.eu',
    user: 'u224428987_joaquin',
    password: '2Uv^3zBgs07',
    database: 'u224428987_survery_joaq',
    multipleStatements: true
});
module.exports = getConnection;