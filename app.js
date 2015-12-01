var weather = require('./weather');

var zip = process.argv.slice(2);

weather.getWeather(+zip);
