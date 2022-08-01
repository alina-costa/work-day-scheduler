var saveButtonEl = Array.from(document.getElementsByClassName("saveBtn"));
var timeBlockEl = document.querySelector(".time-block");
var userInput = "";

// get and display current date with moment.js
var currentDayEl = document.getElementById("currentDay");
function displayDate() {
  var currentDate = moment().format("MMMM Do YYYY");
  currentDayEl.textContent = currentDate;
}
displayDate();

// save descriptions in local stoarge so it remains when the page is refreshed
// get input from where the save button was clicked -
// and update that into local storage

function saveTasks(event) {
  var target = $(event.target);
  var taskInput = $(target).prev().attr("id");
  userInput = $(this).prev().val();
  console.log(userInput);
}

saveButtonEl.forEach((btn) => {
  btn.addEventListener("click", saveTasks);
});
