var saveButtonEl = Array.from(document.getElementsByClassName("saveBtn"));

// get and display current date with moment.js
var currentDayEl = document.getElementById("currentDay");
function displayDate() {
  var currentDate = moment().format("MMMM Do YYYY");
  currentDayEl.textContent = currentDate;
}
displayDate();

// save events in local stoarge so it remains when the page is refreshed
// get parent (section) id (block-#) to take textContent from the input where the save button was clicked -
// and update that with whatever was in local storage

function saveTasks(event) {
  var target = $(event.target);
  var taskInput = $(target).parent().attr("id");
  console.log(taskInput);
}

saveButtonEl.forEach((btn) => {
  btn.addEventListener("click", saveTasks);
});
