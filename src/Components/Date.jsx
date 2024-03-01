import React from "react";


var currentDate = new Date();

var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the day, month, and date
var dayOfWeek = daysOfWeek[currentDate.getDay()];
var month = monthsOfYear[currentDate.getMonth()];
var date = currentDate.getDate();

// Construct the desired date string
var formattedDate = dayOfWeek + ", " + month + " " + date;

function dateTime(){
    return <p>{formattedDate}</p>
}


export default dateTime;