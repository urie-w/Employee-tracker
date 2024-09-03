const postgres = require('postgres');

const connection = postgres({
  host: 'localhost',
  port: 3001,
  database: 'employee_db',
  username: 'postgres',
  password: '',
});

connection.connect(err => {
    if (err) {
        console.error(' error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;