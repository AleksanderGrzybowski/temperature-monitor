const config = require('./config');
const sendToServer = require('./sendToMysqlServer');
const getTemperature = require('./weather');

console.log('Starting with configuration:');
console.log(config);

config.CITIES.split(",").forEach(city => {
    getTemperature(city).then(reading => sendToServer(city, reading));
});


