// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url =  'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=bc647adc084dd4a097a027935b756514';

async function apiFetch() {
    try {
        const respone = await fetch(url);
        if (respone.ok) {
            const data = await respone.json();
            console.log(data); //this is for testing the call
            displayResults(data);
            
        } else {
            throw Error(await respone.text());
        }
    } catch (error) {
        console.log(error);
    }  
}

function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
    
    const weatherImage = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const iconDescription = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', weatherImage);
    weatherIcon.setAttribute('alt', iconDescription);
    captionDesc.textContent = iconDescription;
}

apiFetch();

const month=  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const currentDay = date.getDate();
const currentMonth = month[date.getMonth()];
const year = date.getFullYear();
const currentDate = `Current Date: ${currentMonth} 
					${currentDay}, ${year}`;
const copyRightYear = `${year}`;
const dateMod = document.lastModified;


document.querySelector("#currentdate").textContent = currentDate;
document.querySelector("#year").textContent = copyRightYear;

document.querySelector("#updatedLast").innerHTML = dateMod;
