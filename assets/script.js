//Let's make a timeblock
var now= new Date().getHours();
var span = document.querySelectorAll('span')
var spanEl = Array.from(span);
var allTimeBlocks = document.querySelectorAll(".col-8");
var allTimeBlocksEl = Array.from(allTimeBlocks);
var currentDayEl = document.getElementById('currentDay');
var saveButton = document.querySelectorAll('i');
var saveButtonEl = Array.from(saveButton);
var tasks = document.querySelectorAll("textarea");
var tasksEl = Array.from(tasks);

function getCurrentDate() {
    var date = moment().format('MMMM Do YYYY');
    currentDayEl.textContent = date;
} 

$('document').ready(getCurrentDate);

//We want to call the time column and be able to add a class to it, so that we can apply css to it.
$('document').ready(changeTense);

function changeTense() {
    var timerInterval = setInterval(function() {
        for (i = 0; i < spanEl.length - 1; i++)
        if (now >= spanEl[i].id && now < spanEl[(i + 1)].id) {
            allTimeBlocksEl[i].classList.remove('future');
            allTimeBlocksEl[i].classList.add('present');
        } else if (now > spanEl[i].id) {
            allTimeBlocksEl[i].classList.remove('future');
            allTimeBlocksEl[i].classList.add('past');
        } else allTimeBlocksEl[i].classList.add('future')

        if (now > 18) {
            clearInterval(timerInterval);
        }
        
    }, 1000);
}

// for (i = 0; i < saveButtonEl.length; i++) 
// saveButtonEl[i].addEventListener("click", function(event) {
//     event.preventDefault();

//     localStorage.setItem("tasks", JSON.stringify(tasksEl));
//     renderLastRegistered();
// }
// );

// function renderLastRegistered() {
//     for (i = 0; i < tasksEl.length; i++)
//     var area = JSON.parse(localStorage.getItem("tasks"));
//     console.log(area)
// }
var saveBtn = $('.saveBtn');

var calenderInput = localStorage.getItem("dataObject") || "[]";
var calenderInputArr = JSON.parse(calenderInput);

// loop through each item in the array, grab each item to then display if there is an item
for (var i = 0; i < calenderInputArr.length; i++) {
    var timeID = calenderInputArr[i].time
    var valueVal = calenderInputArr[i].value
    $('#' + timeID).val(valueVal);
}

saveBtn.on("click", function () {
    var time = $(this).siblings(".col-8").attr("id")
    var text = $(this).siblings(".col-8").val()
    calenderInputArr.push({time: time, value: text })
    // console.log(calenderInputArr)
    localStorage.setItem("dataObject", JSON.stringify(calenderInputArr))
})
