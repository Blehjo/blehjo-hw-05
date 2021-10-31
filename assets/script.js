// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

//Let's make a timeblock
var hourColumn = document.querySelectorAll('.hour')
var hourColumnEl = Array.from(hourColumn);
var allTimeBlocks = document.querySelectorAll(".col-8");
var allTimeBlocksEl = Array.from(allTimeBlocks);
var currentDayEl = document.getElementById('currentDay');

function getCurrentDate() {
    var date = moment().format('MMMM Do YYYY');
    console.log(date);
    currentDayEl.textContent = date;
} 

$('document').ready(getCurrentDate);

//We want to call the time column and be able to add a class to it, so that we can apply css to it.
$('document').ready(changeTense);

var now= new Date().getHours();
var span = document.querySelectorAll('span')
var spanEl = Array.from(span);

for (i = 0; i < allTimeBlocksEl.length; i++) {
    allTimeBlocksEl[i].classList.add('future')
}

function changeTense () {
    for (i = 0; i < spanEl.length; i++)
        if (now >= spanEl[i].id && now < spanEl[(i + 1)].id) {
            allTimeBlocksEl[i].classList.remove('future');
            allTimeBlocksEl[i].classList.add('present');
        } else if (now > spanEl[i].id) {
            allTimeBlocksEl[i].classList.remove('future');
            allTimeBlocksEl[i].classList.add('past');
        }
}
