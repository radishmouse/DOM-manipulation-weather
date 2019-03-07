
//create an element that will be inserted into HTML
const wDiv = document.createElement('div');
// wDiv.textContent = "Weather Data";
wDiv.className = "wDiv";

//get a pointer for my existing DIV on the page where this will be inserted
currentWeatherDiv = document.querySelector('[data-weather]');

//create individual elements to hold the data:
function appendElement(tagname,value){
    const wSubDiv = document.createElement('div');
    wSubDiv.textContent =  tagname + ":" + value;
    // console.log(wSubDiv);
    wDiv.append(wSubDiv);
}
//use the weater data to create html elements
appendElement('City Name',getLocationName(atlWeather));
appendElement('Current Temperature',getTemperature(atlWeather));
appendElement('Wind Speed',getWindSpeed(atlWeather));

//Then append that conglomerate div element to the existing page
currentWeatherDiv.appendChild(wDiv);

// Implement the following functions to fulfill the tests!
function getLocationName(data) {
    return data.name;
}
function getTemperature(data) {
    //and convert from Kelvin
    return parseInt(((data.main.temp -273) * 9 / 5) + 32);
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

