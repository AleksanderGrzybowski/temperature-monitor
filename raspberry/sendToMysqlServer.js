const mysql = require('mysql');
const config = require('./config');

module.exports = function sendToServer(temperature) {
  const connection = mysql.createConnection({
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE
  });

  console.log('Connecting to MySQL server...');
  connection.connect(err => {
    if (err) {
      console.error("Could not connect to MySQL!");
      console.error(err);
    } else {
      console.log(`Connected to MySQL server ${config.MYSQL_HOST}, thread id = ${connection.threadId}.`);

      console.log('Making sure that required table is there...');
      const createTableQuery = 'create table if not exists temperature_info ('
        + 'id bigint(20) PRIMARY KEY NOT NULL AUTO_INCREMENT, '
        + 'date_time datetime NOT NULL, '
        + 'place varchar(255) NOT NULL, '
        + 'temperature double NOT NULL '
        + ') ENGINE=MyISAM AUTO_INCREMENT = 10 DEFAULT CHARSET =latin1';

      connection.query(createTableQuery, err => {
        if (err) {
          console.error("Could not create table!");
        } else {
          console.log("Table is present.");

          console.log(`Pushing new reading, temperature = ${temperature}...`);
          connection.query(
            'insert into temperature_info(date_time, place, temperature) values (?, ?, ?)',
            [new Date(), config.PLACE, temperature],
            function (err) {
              if (err) {
                console.error("Insert failed!");
                console.error(err);
              } else {
                console.log("Insert successful.");
                connection.end();
              }
            }
          );
        }
      });
    }
  });
};
