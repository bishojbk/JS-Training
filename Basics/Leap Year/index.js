let year = prompt("Enter a year");
function leapyear() {}
if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
  console.log(year + " is a leap year");
  document.write("This year is a leap year.");
} else {
  console.log(year + " is not a leap year");
  document.write("This year is not a leap year.");
}
leapyear(year);
