/* Current Temputer for Carlsbad, CA.*/
const city = "Murray";
const key = "bc647adc084dd4a097a027935b756514";
const units = "imperial";

const urlTemp =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${key}`;

const cityName = document.querySelector('#city-name')
const curTemp = document.querySelector('#cur-temp');

const capDisc = document.querySelector('#figcaption');
const capDiscDay1 = document.querySelector('#figcaption-day1');
const capDiscDay2 = document.querySelector('#figcaption-day2');
const capDiscDay3 = document.querySelector('#figcaption-day3');

const weatherIcon = document.querySelector('#weather-icon');
const weatherIconDay1 = document.querySelector('#weather-icon-day1');
const weatherIconDay2 = document.querySelector('#weather-icon-day2');
const weatherIconDay3 = document.querySelector('#weather-icon-day3');

const dayTemp1 = document.querySelector('#day-temp-1');
const dayTemp2 = document.querySelector('#day-temp-2');
const dayTemp3 = document.querySelector('#day-temp-3');

function getWeather(){
    
}
async function fetchTemp() {
    try {
        const resTemp = await fetch(urlTemp);
        if (resTemp.ok) {
            const data1 = await resTemp.json();
            console.log(data1); 
            displayResults(data1);
        } 
        else {
            throw Error(await resTemp.text());
        }
    } 
    catch (error) {
        console.log(error);
    }  
}
async function fetchForecast() {
    try {
        const resForecast = await fetch(urlForecast);
        if (resForecast.ok) {
            const data2 = await resForecast.json();
            console.log(data2); 
            displayDay1(data2);
        } 
        else {
            throw Error(await resForecast.text());
        }
    } 
    catch (error) {
        console.log(error);
    }  
}
 

function  displayResults(weatherData) {
    curTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    const weatherImage = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const iconDescription = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', weatherImage);
    weatherIcon.setAttribute('alt', iconDescription);
    capDisc.textContent = iconDescription;
}

function displayDay1(weatherData){
    dayTemp1.innerHTML = `<strong>${weatherData.list[6].main.temp.toFixed(1)}</strong>`;
    const weatherImageDay1 = `https://openweathermap.org/img/w/${weatherData.list[6].weather[0].icon}.png`;
    const iconDescriptionDay1 = weatherData.list[6].weather[0].description;
    weatherIconDay1.setAttribute('src', weatherImageDay1);
    weatherIconDay1.setAttribute('alt', iconDescriptionDay1);
    capDiscDay1.textContent = iconDescriptionDay1;

    dayTemp2.innerHTML = `<strong>${weatherData.list[14].main.temp.toFixed(1)}</strong>`;
    const weatherImageDay2 = `https://openweathermap.org/img/w/${weatherData.list[14].weather[0].icon}.png`;
    const iconDescriptionDay2 = weatherData.list[14].weather[0].description;
    weatherIconDay2.setAttribute('src', weatherImageDay2);
    weatherIconDay2.setAttribute('alt', iconDescriptionDay2);
    capDiscDay2.textContent = iconDescriptionDay2;

    dayTemp3.innerHTML = `<strong>${weatherData.list[22].main.temp.toFixed(1)}</strong>`;
    const weatherImageDay3 = `https://openweathermap.org/img/w/${weatherData.list[22].weather[0].icon}.png`;
    const iconDescriptionDay3 = weatherData.list[22].weather[0].description;
    weatherIconDay3.setAttribute('src', weatherImageDay3);
    weatherIconDay3.setAttribute('alt', iconDescriptionDay3);
    capDiscDay3.textContent = iconDescriptionDay3;

}

fetchTemp();
fetchForecast();