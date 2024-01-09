# weatherapp
JavaScript, HTML5/CSS3, Bootstrap 5

## Description
This application takes input (City Name) from the user, hits the api.openweathermap.org API, and updates the DOM with the formatted results.

## JavaScript structure
The JS has two main functions, getApi() and updateDom(). These are both async functions that are called in order via a third function, runFuncs(). Stucturing the application this way allows for the API to take time before returning the weather data so that the DOM is updated only after the API finishes providing the data.

## HTML and CSS structure
The data being sent from the API is positioned in the middle of the UI via CSS grid run by Bootstrap 5's row/column grid system. 

## Credits
font PT Sans Narrow - Designed by ParaType
