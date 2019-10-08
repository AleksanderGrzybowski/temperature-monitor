const config = require('./config');
const axios = require('axios');

module.exports = function temperatureIn(place) {
    console.log(`Fetching temperature in ${place}...`);
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${config.APPID}&units=metric`
    ).then(({data}) => {
        const temperature = data.main.temp;
        console.log(`Temperature in ${place} -> ${temperature}`);
        return temperature;
    })
};
