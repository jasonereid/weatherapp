async function getApi() {
    let city = prompt("City name");
    const weatherApi = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=28fe7b5f9a78838c639143fc517e4343');
    const data = await weatherApi.json();
    return(data);
}

async function runFuncs() {
    func1 = await getApi();
    func2 = await updateDom();
    // log data for testing
    console.log(func1); 
}

async function updateDom() {
    let temp = document.getElementById("temp");
    let cloudcover = document.getElementById("cloudcover");
    let precipitation = document.getElementById("precipitation");
    let windspeed = document.getElementById("windspeed");
    let message = document.getElementById("message");
    let body = document.getElementById("bgcolor");
    // update divs with new data
    temp.innerHTML = func1.main.temp;
        if(func1.main.temp < 50) {
           temp.innerHTML += " &#10052;";
           body.style.background = "linear-gradient(to left, #FFFBE4, #64C4EE)";
        }
        if(func1.main.temp > 75) {
            temp.innerHTML += " &#x1F31E;";
            body.style.background = "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)";
         }
    cloudcover.innerHTML = func1.clouds.all;
        if(func1.clouds.all > 50) {
            cloudcover.innerHTML += " &#9729;"
            body.style.background = "linear-gradient(to left, #a2a2a2, #a4C4EE);";
        }
    precipitation.innerHTML = func1.main.humidity;
        if(func1.main.humidity > 50) {
            precipitation.innerHTML += " &#128167;"
        }
    windspeed.innerHTML = func1.wind.speed; 
    if(func1.wind.speed > 2) {
        windspeed.innerHTML += " &#x2634;"
    }
    message.innerText = func1.name.toUpperCase();
}

runFuncs();