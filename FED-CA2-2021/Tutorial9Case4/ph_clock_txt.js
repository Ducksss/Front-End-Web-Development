"use strict";
/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */



/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Chai Pin Zheng
   Date: 31/7/2020

   Filename:   ph_clock.js     

*/






/* ------------------------------------------------- */


/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */


/*timeLeft function converts everything into second -> making it easier to be calculated*/
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft * 60 + secsLeft;


/*Area of the program that helps to Call The Function */
var clockID = setInterval("countdown()", 1000);
//Execute the function to run and display the countdown clock //


/*When function is called, it checks if the timeLeft is = 0. If so, it will stop the clock*/
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */
function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}


/*The countdown() initiaties the countdown, do the subtraction etc, and is the brains of this function */
function countdown() {
   //Reinitialise the of minsLeft and secLeft everytime this fucntion is called by setInterval
   minsLeft = Math.floor(timeLeft / 60);
   secsLeft = timeLeft - 60 * minsLeft;
   //calls the addLeadingZero(num) functions to add 0 if minsLeft/secsLeft < 0
   var minsString = addLeadingZero(minsLeft);
   var secsString = addLeadingZero(secsLeft);
   //Displays the output after calculations etc
   document.getElementById("minutes").innerHTML = minsString;
   document.getElementById("seconds").innerHTML = secsString;
   //checks the Timer for which TimeLeft = 0, for which calls the function stopClock
   checkTimer();
   //steps the value down by 1
   timeLeft--;
}


function stopClock() {
   document.getElementById("TimeHead").insertAdjacentHTML("beforeend", "<br />(Order Expired)");
   clearInterval(clockID);
   //when timeLeft ===0, this program will insert a line below the end of TimeHead that is has ended to alert that order has Expired
}