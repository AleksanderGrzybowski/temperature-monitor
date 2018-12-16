const axios = require('axios');
const config = require('./config');

module.exports = function sendToServer(temperature) {
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
};
