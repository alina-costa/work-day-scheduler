var saveButtonEl = Array.from(document.getElementsByClassName("saveBtn"));
var timeBlockEl = document.querySelector(".time-block");
var userInput = "";
var inputEl = $(".description");
var inputElArr = Array.from(inputEl);

// get and display current date with moment.js
var currentDayEl = document.getElementById("currentDay");
function displayDate() {
  var currentDate = moment().format("MMMM Do YYYY");
  currentDayEl.textContent = currentDate;
}
displayDate();

function saveTasks(event) {
  var target = $(event.target);
  var taskInput = $(target).prev().attr("id");
  userInput = $(this).prev().val();
  console.log(userInput);
}

saveButtonEl.forEach((btn) => {
  btn.addEventListener("click", saveTasks);
});

//function for relative time color
function currentHour() {
  var currentTime = moment().hour();
  for (i = 0; i < inputElArr.length; i++) {
    var inputElId = inputElArr[i].getAttribute("id");
    var inputIdNum = Number(inputElId);

    if (currentTime < inputIdNum) {
      $(inputElArr[i]).addClass("future");
    }
    if (currentTime === inputIdNum) {
      $(inputElArr[i]).addClass("present");
    }
    if (currentTime > inputIdNum) {
      $(inputElArr[i]).addClass("past");
    }
  }
}
currentHour();

// save userInput in local stoarge so it remains when the page is refreshed
