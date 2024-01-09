# weatherapp
Made with JavaScript, HTML5/CSS3, Bootstrap 5

![image](https://github.com/jasonereid/weatherapp/assets/94079137/304ba09d-76ff-490b-b7a3-fa0a465d1139)
![image](https://github.com/jasonereid/weatherapp/assets/94079137/712123f3-2857-46a3-83f6-190871307e2d)


## Live Preview here: https://jasonereid.github.io/weatherapp/

## Description
This application takes input (City Name) from the user, hits the api.openweathermap.org API, and updates the DOM with the formatted results. The layout is responsive and the background changes to match the weather.

## JavaScript structure
The JS has two main functions, getApi() and updateDom(). These are both async functions that are called in order via a third function, runFuncs(). Stucturing the application this way allows for the API to take time before returning the weather data so that the DOM is updated only after the API finishes providing the data.

## HTML and CSS structure
The data being sent from the API is positioned in the middle of the UI via CSS grid run by Bootstrap 5's row/column grid system. 

## Credits

API - openweathermap.org
font PT Sans Narrow - Designed by ParaType
