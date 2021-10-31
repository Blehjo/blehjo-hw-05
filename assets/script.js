// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//Let's make a timeblock
var time9El = document.getElementById('time9');
var time10El = document.getElementById('time10');
var time11El = document.getElementById('time11');
var time12El = document.getElementById('time12');
var time1El = document.getElementById('time1');
var time2El = document.getElementById('time2');
var time3El = document.getElementById('time3');
var time4El = document.getElementById('time4');
var time5El = document.getElementById('time5');

var allTimeBlocks = [time9El, time10El , time11El, time12El, time1El, time2El , time3El, time4El, time5El];

for (i = 0; i < allTimeBlocks.length; i++) {
    allTimeBlocks[i].classList.add('future')
}

var hourColumn = document.querySelectorAll('.hour')
var hourColumnEl = Array.from(hourColumn);
var currentDayEl = document.getElementById('currentDay');

function getCurrentDate() {
    var date = moment().format('MMMM Do YYYY');
    console.log(date);
    currentDayEl.textContent = date;
} 

$('document').ready(getCurrentDate);

//We want to call the time column and be able to add a class to it, so that we can apply css to it.

function changeTense () {
    var date = new Date().getHours();
    console.log(date);
    for (i = 0; i < hourColumnEl.length; i++) {
        console.log(hourColumn[i].value);
        // hourColumnEl[i].textContent = date;
        if (hourColumnEl[i].value == date) {
            allTimeBlocks[i].classList.remove('future');
            allTimeBlocks[i].classList.add('present');
            console.log(hourColumn[i].textContent);
        }
    };
}

$('document').ready(changeTense);

// var time = moment.locale(); //en
var trees = moment().format('LT');   // 5:26 PM
console.log(trees);
var today = new Date();
var date = moment().format('LT');


var now= new Date().getHours();
console.log(now)
if(now>6 && now<19){
    //check day shift button;
}
// else check niteshift button