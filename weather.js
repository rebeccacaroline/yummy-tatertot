var http = require('http');

function getWeather(zip){
  http.get("http://api.wunderground.com/api/59fc6ecd129fa3cb/geolookup/conditions/q/"+zip+".json", function(response){
    var body = '';
    response.on('data', function(chunk){
      body += chunk;
    });
    response.on('end', function(){
      body = JSON.parse(body);
      console.log("In "+body.current_observation.display_location.city+" it is "+body.current_observation.temperature_string+".");
    });
  });
};

module.exports.getWeather = getWeather;

