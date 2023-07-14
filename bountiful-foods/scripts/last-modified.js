/* Last Date Modifed Footer*/

/*----Get the Current Date----*/
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date();
const curDay = date.getDate();
const curMonth =  month[date.getMonth()];
const curYear = date.getFullYear();
const curDate = `Current Date ${curMonth} ${curDay}, ${curYear}`;
//console.log(curDate);
document.querySelector('#currentDate').innerHTML = curDate;

/*----Get the Modified date----*/
const mod = new Date(document.lastModified);
const modDay = mod.getDate();
const modMonth = month[mod.getMonth()];
const modYear = mod.getFullYear();
const modDate = `Last Updated ${modMonth} ${modDay}, ${modYear}`;
// console.log(modDate);
document.querySelector('#lastUpdated').innerHTML = modDate;


/*----Copy Right Year-----*/
const copyRight = `${curYear}`;
document.querySelector('#year').textContent = copyRight;