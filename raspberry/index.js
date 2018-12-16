const ds18b20 = require('ds18b20');

const config = require('./config');

let sendToServer;
if (config.BACKEND_TYPE === 'rest') {
    sendToServer = require('./sendToRestServer');
} else if (config.BACKEND_TYPE === 'mysql') {
    sendToServer = require('./sendToMysqlServer')
}

function readSensor(sensorId, sendCallback) {
    console.log(`Reading the sensor ${sensorId}...`);
    
    ds18b20.temperature(sensorId, function (err, temperature) {
        if (err) {
            console.error('Failed to read the sensor!');
            console.error(err);
        }

        console.log(`Current temperature is ${temperature}, sending to server...`);
        sendCallback(temperature);
    });
}

function detectSensors(sensorIdCallback) {
    console.log('Detecting sensors...');
    ds18b20.sensors(function (err, ids) {
        if (err) {
            console.error('Failed to detect sensors!');
            console.error(err);
            process.exit(1);
        }
        if (ids.length === 0) {
            console.error('Detection procedure succeeded, but no sensors detected!');
            process.exit(1);
        }

        console.log(`Detected sensors: `);
        console.log(ids);
        const sensorId = ids[0];
        sensorIdCallback(sensorId);
    });
}

console.log('Starting ds18b20 collector with configuration:');
console.log(config);

detectSensors(sensorId => setInterval(() => readSensor(sensorId, sendToServer), config.INTERVAL * 1000));

