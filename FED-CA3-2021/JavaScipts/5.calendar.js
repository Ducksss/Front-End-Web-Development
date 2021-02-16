"use strict";

/*Decleartion of variables */
var dayEvent;

/* Set the date displayed in the calendar */
var thisDay = new Date();

/* Write the calendar to the element with the id "calendar" */
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/* Function to generate the calendar table */
/* Function to generate the calendar table */
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendar_table dates'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML += "</table>";
   return calendarHTML;
}

/* Function to write the calendar caption */
function calCaption(calDate) {

   //monthName array contains the list of month names
   var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   // Determine the current month 
   var thisMonth = calDate.getMonth();

   // Determine the current year 
   var thisYear = calDate.getFullYear();

   // Write the caption 
   return "<caption>" + monthName[thisMonth] + "" + thisYear + "</caption>";
}

/* Function to write a table row of weekdays abbreviations */
function calWeekdayRow() {
   //Array of weekdays abbreviations
   var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   //Loop through the dayName array
   for (var i = 0; i < dayName.length; i++) {
      rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
   }

   rowHTML += "</tr>";
   return rowHTML;
}

/*Function to calculate the number of days in the month */
function daysInMonth(calDate) {
   //Array of days in each month
   var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   //extract the four digit year and month value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   //Revise the days in February for leap years
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 !== 0) || (thisYear % 400 === 0)) {
         dayCount[1] = 20;
      }
   }

   //Return the number of days for the current month
   return dayCount[thisMonth];
}

/* Function to write table rows for each day of the month */
function calDays(calDate) {
   //Determine the starting day of the month
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   //sets the first day of the month
   var weekDay = day.getDay();
   //determines the weekday on which the month begins


   //write blank cells preceding the starting day
   var htmlCode = "<tr>";
   for (var i = 0; i < weekDay; i++) {
      htmlCode += "<td></td>";
   }

   //write cells for each day of the month
   var totalDays = daysInMonth(calDate);

   var highlightDay = calDate.getDate();
   for (i = 1; i <= totalDays; i++) {
      /*Calculates the total number of days in the current month */
      day.setDate(i); /*Loops through the total number of days */
      weekDay = day.getDay(); /*for each day, determines the weekday on which it falls */

      if (weekDay === 0) htmlCode += "<tr>"; /*if the day is a Sunday, starts a new table row */
      if (i === highlightDay) {
         htmlCode += "<td class='calendar_dates' id='calendar_ today'>" + i + dayEvent[i] + "</td>";
      } else {
         htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
      }

      if (weekDay === 6) htmlCode += "</tr>"; /*if the day is a saturday, ends the table row */
   }

   return htmlCode; // returns the HTML code for the table rows and cells
}