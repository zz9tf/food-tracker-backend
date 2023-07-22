import mysql from 'mysql';

const MySQLConnection = mysql.createConnection({
    host: 'localhost',
    user: 'food-tracker-admin',
    password: '',
    port: '3306',
    database: "food_tracker_database"
});

MySQLConnection.connect(function (err) {
    if (err) { console.error('Error:', err) }
    console.log('Successfully connected MySQL database');
});

export function sqlQuery(query, data) {
    return new Promise(resolve => {
        console.log('query: ' + query);
        console.log('data: ' + data);
        MySQLConnection.query(query, data, function (error, result) {
            if (error) { throw error }
            try {
                console.log('result: ' + JSON.stringify(result));
                resolve(result);
            } catch (error) {
                resolve({});
                throw error;
            }
        });
    });
}