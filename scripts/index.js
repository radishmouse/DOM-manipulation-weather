
//create an element that will be inserted into HTML
const wDiv = document.createElement('div');
//create an element to hold icon elements
const iconDiv = document.createElement('div');

// wDiv.textContent = "Weather Data";
wDiv.className = "wDiv";

//get a pointer for my existing DIVs on the page where this will be inserted
currentWeatherDiv = document.querySelector('[data-weather]');
currentIcons = document.querySelector('[data-icon]');
currentMap = document.querySelector('[data-map]');

//create individual elements to hold the data:
function appendElement(tagname,value){
    const wSubDiv = document.createElement('div');
    wSubDiv.textContent =  tagname + ":" + value;
    // console.log(wSubDiv);
    wDiv.append(wSubDiv);
}

function addMap(data){
    const locationMap = document.createElement('iframe');
    // const mapurl = "http://maps.google.com/maps?q=" + 35.856737 + ", " + 10.606619 + "&z=15&output=embed" ;
    const mapurl = "http://maps.google.com/maps?q=" + getLocationLatitude(data) + ", " + getLocationLongitude(data) + "&z=15&output=embed" ;
    locationMap.setAttribute('width',"360");
    locationMap.setAttribute('height',"270");
    locationMap.setAttribute('frameborder',"0");
    locationMap.setAttribute('style',"border:0");
    locationMap.setAttribute('src',mapurl);
    currentMap.append(locationMap);

    
};

//use the weater data to create html elements
appendElement('City Name',getLocationName(atlWeather));
appendElement('Current Temperature',getTemperature(atlWeather));
appendElement('Wind Speed',getWindSpeed(atlWeather));

//Then append that conglomerate div element to the existing page
currentWeatherDiv.appendChild(wDiv);

const iconArray = getIconArray(atlWeather);   
appendIconElement(iconArray);

addMap(atlWeather);

//function to get the array of icons urls and append them to x elements in the iconDiv holder
function appendIconElement(iconsURLs){
    iconsURLs.forEach(function(url) {
        const iconEl = document.createElement('img');
        iconEl.setAttribute('src',url);
        iconDiv.append(iconEl);
    });
    //appends this to the page
    currentIcons.append(iconDiv);

};



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
    //this is an array.  i only pulled one.
    return data.weather[0].description;
}

//gets all possible weather icons - there can be more than one.
//returns an array of the icon converted to its matching png file
function getIconArray(data){
    const iconAr = data.weather.map(function(w) {
        return "http://openweathermap.org/img/w/"+w.icon +".png";
        // return w.icon;
    })
    console.log(iconAr);
    return iconAr;
}

function getWindSpeed(data) {
    return data.wind.speed;
}
function getSunrise(data) {
    return data.sys.sunrise;
}

