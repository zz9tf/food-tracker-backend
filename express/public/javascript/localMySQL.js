import mysql from 'mysql';

export const MySQLConnection = mysql.createConnection({
    host: 'localhost',
    user: 'food-tracker-admin',
    password: '',
    port: '3306',
    database: "food_tracker_database"
});

export const sqlQuery = (query) => {
    MySQLConnection.connect(function (err) {
        if (err) { console.error('Error:', err) }
        console.log('connected database');
        MySQLConnection.query(query, function (err, result) {
            if (err) { throw err; }
            return result;
        });
    });
}

export const sqlQueryWithData = (query, data) => {
    MySQLConnection.connect(function (err) {
        if (err) { console.error('Error:', err) }
        console.log('connected database');
        MySQLConnection.query(query, data, function (err, result) {
            if (err) { throw err; }
            return result;
        });
    });
}