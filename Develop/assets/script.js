// get and display current date with moment.js
var currentDayEl = document.getElementById("currentDay");
function displayDate() {
  var currentDate = moment().format("MMMM Do YYYY");
  currentDayEl.textContent = currentDate;
}
displayDate();
