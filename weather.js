let lat;
let long;
let clouds = document.getElementById("clouds");
let sun = document.getElementById("sun");
let rain = document.getElementById("rain");
let clear = document.getElementById("clear");
let message = document.getElementById("message");

function updateUi() {
  if (data.current.cloud_cover > 50) {
    clouds.style.display = "block";
} 
if (data.current.precipitation  > 1) {
  rain.style.display = "block";
}
if (data.current.cloud_cover > 50) {
  sun.style.display = "block";
}
}

async function apifunc(lat, long) {
    let apiResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&current=temperature_2m,is_day,precipitation,cloud_cover,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,rain,snowfall&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1");
    let data = await apiResponse.json();
    console.log(data);
    let temp = document.getElementById("temp");
    let cloudcover = document.getElementById("cloudcover");
    let precipitation = document.getElementById("precipitation");
    let windspeed = document.getElementById("windspeed");

    temp.innerHTML = data.current.temperature_2m;
    cloudcover.innerHTML = data.current.cloud_cover;
    precipitation.innerHTML = data.current.precipitation;
    windspeed.innerHTML = data.current.wind_speed_10m;
    // change display to match weather
    updateUi();
    
}

// get teh user location
let successCallback = (position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    location2 = "Lat " + lat + ", Long " + long;
    // call the weather api
    apifunc(lat, long);
  };

  const errorCallback = (error) => {
    console.log(error);
    alert("You did not allow your location, so we cannot get local weather");
  };
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
