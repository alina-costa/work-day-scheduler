var saveButtonEl = Array.from(document.getElementsByClassName("saveBtn"));

// get and display current date with moment.js
var currentDayEl = document.getElementById("currentDay");
function displayDate() {
  var currentDate = moment().format("MMMM Do YYYY");
  currentDayEl.textContent = currentDate;
}
displayDate();

// save events in local stoarge so it remains when the page is refreshed
// use target to take textContent from the input where the save button was clicked -
// and update that with whatever was in local storage

function saveTasks() {
  console.log("what the heck");
  var taskInput = document.getElementsByTagName("input").textContent;
  // localStorage.setItem("savedTask", JSON.stringify())
}

saveButtonEl.forEach((btn) => {
  btn.addEventListener("click", saveTasks);
});

// taskInput.forEach((input) => {
//   input.addEventListener("input", saveTasks);
// });
