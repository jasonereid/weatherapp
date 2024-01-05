let lat;
let long;


const successCallback = (position) => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(position.coords); 
    return(lat,long)    

    // call the api to get weather info

    
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



async function apifunc() {
    const apiResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&current=temperature_2m,is_day,precipitation,cloud_cover,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,rain,snowfall&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1");
    let data = await apiResponse.json();
    console.log(data);
    let temp = document.getElementById("temp");
    let cloudcover = document.getElementById("cloudcover");
    let precipitation = document.getElementById("precipitation");
    let windspeed = document.getElementById("windspeed");
    let location = document.getElementById("location");
    temp.innerHTML = data.current.temperature_2m;
    cloudcover.innerHTML = data.current.cloud_cover;
    precipitation.innerHTML = data.current.precipitation;
    windspeed.innerHTML = data.current.wind_speed_10m;
}
    

apifunc();


