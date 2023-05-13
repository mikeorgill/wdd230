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

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}   

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;