
//create an element that will be inserted into HTML
const wDiv = document.createElement('div');
wDiv.textContent = "Weather Data";

//get a pointer for my existing DIV on the page where this will be inserted
currentWeaterDiv = document.querySelector('[data-weather]');

//use the weater data to create html elements

// Implement the following functions to fulfill the tests!
function getLocationName(data) {
    return data.name;
}
function getLocationCountry(data) {
    return data.sys.country;
}
function getLocationLatitude(data) {
    return data.coord.lat;

}
function getLocationLongitude(data) {
    return data.coord.lon;
}
function getDescription(data) {
    return data.weather[0].description;
}
function getWindSpeed(data) {
    return data.wind.speed;
}
function getSunrise(data) {
    return data.sys.sunrise;
}

// console.log(`The location is ${getLocationName(atlWeather)}`);
// console.log(getLocationCountry(atlWeather));
// console.log(atlWeather.weather.description);
// Please ignore the following
try {
    module.exports = {
        getLocationName,
        getLocationCountry,
        getLocationLatitude,
        getLocationLongitude,
        getDescription,
        getWindSpeed,
        getSunrise
    }
} catch (e) {
    
}
