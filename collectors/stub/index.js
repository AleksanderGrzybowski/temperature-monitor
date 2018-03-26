const axios = require('axios');

const config = {
    API_URL: process.env.API_URL || 'http://localhost:8080/api/store',
    INTERVAL: process.env.INTERVAL || 1,
    PLACE: process.env.PLACE || 'stubPlace'
};

console.log('Using the following configuration: ');
console.log(config);

const context = {
    currentValue: 0
};

setInterval(() => sendReading(context), config.INTERVAL * 1000);

function sendReading(context) {
    const temperature = 30 * Math.sin(context.currentValue);
    context.currentValue += 0.1;

    const body = {
        place: config.PLACE,
        temperature
    };

    console.log("Sending...");
    console.log(body);

    axios.post(config.API_URL, body)
      .then(() => console.log("Sent sucessfully."))
      .catch(e => console.error(e));
}
