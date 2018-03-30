const ds18b20 = require('ds18b20');
const axios = require('axios');

const config = {
    API_URL: process.env.API_URL || 'http://localhost:8080/api/store',
    INTERVAL: process.env.INTERVAL || 10,
    PLACE: process.env.PLACE || 'raspberry'
};

function sendToServer(temperature) {
    const body = {place: config.PLACE, temperature};

    console.log('Prepared request body:');
    console.log(body);

    console.log('Sending...');
    axios.post(config.API_URL, body)
      .then(() => console.log('Sent sucessfully.'))
      .catch(e => {
          console.error('Error sending the request!');
          console.error(e);
      });
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

