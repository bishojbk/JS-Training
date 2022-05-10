let date = new Date();
console.log(date);
let year = date.getFullYear();
console.log(year);
let day = date.getDay();
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayy = weekDays[day];
document.write("Today is :", " ", dayy);
document.write("<br/>");
let hours = date.getHours();

let minutes = date.getMinutes();

let seconds = date.getSeconds();

let time = hours + ":" + " " + minutes + ":" + " " + seconds;
document.write("Current time is : ", " ", time);
