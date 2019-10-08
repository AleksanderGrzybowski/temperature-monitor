const mysql = require('mysql');
const config = require('./config');

const createTable = 'create table if not exists temperature_info ('
    + 'id bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT, '
    + 'date_time datetime NOT NULL, '
    + 'place varchar(255) NOT NULL, '
    + 'temperature double NOT NULL '
    + ') ENGINE=MyISAM AUTO_INCREMENT = 10 DEFAULT CHARSET =latin1';
const insertQuery = 'insert into temperature_info(date_time, place, temperature) values (?, ?, ?)';

module.exports = function sendToServer(place, temperature) {
    const connection = mysql.createConnection({
        host: config.MYSQL_HOST,
        port: config.MYSQL_PORT,
        user: config.MYSQL_USER,
        password: config.MYSQL_PASSWORD,
        database: config.MYSQL_DATABASE
    });

    console.log(`Connecting to MySQL server ${config.MYSQL_HOST}...`);
    connection.connect(err => {
        if (err) {
            console.error("Could not connect to MySQL!");
            console.error(err);
            return;
        }

        console.log(`Connected to MySQL server ${config.MYSQL_HOST}, thread id = ${connection.threadId}.`);
        console.log('Making sure that required table is there...');
        connection.query(createTable, err => {
            if (err) {
                console.error("Could not create table!");
                return;
            }
            console.log("Table is present.");

            console.log(`Pushing new reading, temperature = ${temperature}...`);
            let date = new Date();
            date.setHours(date.getHours() - 2);
            connection.query(insertQuery, [date, place, temperature], err => {
                    if (err) {
                        console.error("Insert failed!");
                        console.error(err);
                        return;
                    }

                    console.log("Insert successful.");
                    connection.end();
                }
            );
        });
    });
};
