// chapter 31 Getting the current date and time ________________________

var rightNow = Date();
console.log(rightNow, "Typeof", typeof rightNow);

var newRightNow = new Date();
console.log(newRightNow, "Typeof", typeof newRightNow);

var theDate = newRightNow.getDate();
console.log(theDate);

var theDay = newRightNow.getDay();
console.log(theDay);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay1 = now.getDay();
var nameOfToday = dayNames[theDay1];

console.log(now);
console.log(theDay1);
console.log(nameOfToday);

// chapter 32 Extracting parts of the date and time ________________________

var extractingDate = new Date();

console.log(
  extractingDate + "\n   " + extractingDate.getDate(),
  extractingDate.getDay(),
  extractingDate.getFullYear(),
  extractingDate.getHours(),
  extractingDate.getMilliseconds(),
  extractingDate.getMinutes(),
  extractingDate.getMonth(),
  extractingDate.getSeconds(),
  extractingDate.getTime()
);

// chapter 33 Specifying a date and time  ________________________

var today = new Date();
console.log(today);
var doomsday = new Date("June 30, 2035");
console.log(doomsday);

var msToday = today.getTime();
console.log((msToday / (1000 * 60 * 60 * 24)).toFixed(1));
var msDoomsday = doomsday.getTime();
console.log((msDoomsday / (1000 * 60 * 60 * 24)).toFixed(1));
var msDiff = msDoomsday - msToday;
console.log((msDiff / (1000 * 60 * 60 * 24)).toFixed(1));
msDiff = Math.floor(msDiff);
console.log(msDiff);

// chapter 34 Changing elements of a date and time  ________________________

// Example 1: Creating a Date object and changing the year
let date1 = new Date("2023-05-15");
console.log("Original Date:", date1); // Output: Original Date: Mon May 15 2023 00:00:00 GMT+0500 (Pakistan Standard Time)

date1.setFullYear(2025);
console.log("Date with year changed to 2025:", date1); // Output: Date with year changed to 2025: Tue May 15 2025 00:00:00 GMT+0500

// Example 2: Changing the month
let date2 = new Date("2025-06-10");
console.log("Original Date:", date2); // Output: Original Date: Tue Jun 10 2025 00:00:00 GMT+0500

date2.setMonth(7); // 7 represents August (0-based index)
console.log("Date with month changed to August:", date2); // Output: Date with month changed to August: Thu Aug 10 2025 00:00:00 GMT+0500

// Example 3: Changing the day
let date3 = new Date("2025-06-10");
console.log("Original Date:", date3); // Output: Original Date: Tue Jun 10 2025 00:00:00 GMT+0500

date3.setDate(20);
console.log("Date with day changed to 20:", date3); // Output: Date with day changed to 20: Fri Jun 20 2025 00:00:00 GMT+0500

// Example 4: Changing the hours
let date4 = new Date("2025-06-10T08:23:00");
console.log("Original Date and Time:", date4); // Output: Original Date and Time: Tue Jun 10 2025 08:23:00 GMT+0500

date4.setHours(14); // Change to 2:00 PM
console.log("Date with hours changed to 14:00:", date4); // Output: Date with hours changed to 14:00: Tue Jun 10 2025 14:00:00 GMT+0500

// Example 5: Changing multiple elements at once
let date5 = new Date("2025-06-10T08:23:00");
console.log("Original Date and Time:", date5); // Output: Original Date and Time: Tue Jun 10 2025 08:23:00 GMT+0500

date5.setFullYear(2026);
date5.setMonth(0); // January (0-based)
date5.setDate(1);
date5.setHours(9);
date5.setMinutes(30);
console.log("Date with multiple changes (2026-01-01 09:30):", date5); // Output: Date with multiple changes (2026-01-01 09:30): Thu Jan 01 2026 09:30:00 GMT+0500
