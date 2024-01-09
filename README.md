# weatherapp
Made with JavaScript, HTML5/CSS3, Bootstrap 5

![image](https://github.com/jasonereid/weatherapp/assets/94079137/1532fcc2-7041-4a19-96a7-2db1c2b00bb8)

## Live Preview here: https://jasonereid.github.io/weatherapp/

## Description
This application takes input (City Name) from the user, hits the api.openweathermap.org API, and updates the DOM with the formatted results.

## JavaScript structure
The JS has two main functions, getApi() and updateDom(). These are both async functions that are called in order via a third function, runFuncs(). Stucturing the application this way allows for the API to take time before returning the weather data so that the DOM is updated only after the API finishes providing the data.

## HTML and CSS structure
The data being sent from the API is positioned in the middle of the UI via CSS grid run by Bootstrap 5's row/column grid system. 

## Credits
font PT Sans Narrow - Designed by ParaType
