/* Current Temputer for Carlsbad, CA.*/

const urlTemp =  'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=bc647adc084dd4a097a027935b756514';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=bc647adc084dd4a097a027935b756514'

const curTemp = document.querySelector('#cur-temp');
const capDisc = document.querySelector('figcaption');
const weatIcon = document.querySelector('#weather-icon');
const dayTemp1 = document.querySelector('#day-temp-1');
const dayTemp2 = document.querySelector('#day-temp-2');
const dayTemp3 = document.querySelector('#day-temp-3');


async function apiFetchTemp() {
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
async function apiFetchForecast() {
    try {
        const resForecast = await fetch(urlForecast);
        if (resForecast.ok) {
            const data2 = await resForecast.json();
            console.log(data2); 
            displayResults(data2);
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
    captionDesc.textContent = iconDescription;
}

apiFetchTemp();
apiFetchForecast();