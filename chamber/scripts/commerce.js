const month=  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const currentDay = date.getDate();
const currentMonth = month[date.getMonth()];
const year = date.getFullYear();
const currentDate = `Current Date: ${currentMonth} 
					${currentDay}, ${year}`;
const copyRightYear = `${year}`;
const dateMod = document.lastModified;

//if statment will control which date the banner will appear.
function banner() {


if(currentDay === 6 || currentDay === 2)
    document.getElementById("#banner-top").style.display = "none";

}

document.querySelector("#currentdate").textContent = currentDate;
document.querySelector("#year").textContent = copyRightYear;
document.querySelector("#updatedLast").innerHTML = dateMod;
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}   

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;


async function getWeatherApi(query) {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=06a0498a5dbd4bbb96030733231202&q=Murray UT&days=1&aqi=no&alerts=no');
   
    const data = await response.json();
    console.log(data);
    var resultsWeather = document.querySelector("#weather");
    var city = data.location.name;
    resultsWeather.append(city);
    resultsWeather.append(' City |');
    //var temp = document.createElement("li");
    var temp = " Temperature outside: " + data.current.temp_f;
    var wind = " | Wind Speed: " +data.current.wind_mph;
    var windChill = " | Wind Chill: ";// + Math.pow(35.74 + .6215(temp);// - 35.75(wind)^.16 + .4275(temp*wind)^.16);
    resultsWeather.append(temp);
    resultsWeather.append(wind);
    resultsWeather.append(windChill);
    //return data.location;
    //.then((response) => response.json())
    //.then((data) => console.log(data));
}

getWeatherApi();


