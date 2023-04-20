const month=  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const currentDay = date.getDay();
const currentMonth = month[date.getMonth()];
const year = date.getFullYear();
const currentDate = `Current Date: ${currentMonth} 
					${currentDay}, ${year}`;
document.querySelector("#currentdate").textContent = currentDate;
const getTemperature = '89';
const getTemp = `Current Temperature: ${getTemperature}`;
document.querySelector("#temp").textContent = getTemp;

