import mysql from 'mysql';

const MySQLConnection = mysql.createConnection({
    host: 'localhost',
    user: 'food-tracker-admin',
    password: '',
    port: '3306'
});

MySQLConnection.connect(function (err, conn) {
    if (err) { throw err; }
    console.log('Successfully created connection')
});


export { MySQLConnection };