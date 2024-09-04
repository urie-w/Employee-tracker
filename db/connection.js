const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  database: 'employee_db',
  password: '1',
  port: 5432,
});

client.connect(err => {
    if (err) {
        console.error(' error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the employee_db database.');
});

module.exports = client;