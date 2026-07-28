let myDate = new Date();
console.log(myDate)
console.log(myDate.getDate())
console.log(myDate.getFullYear())
console.log(myDate.getMilliseconds())
console.log(myDate.getMonth())
console.log(myDate.getTime())
console.log(myDate.getTimezoneOffset())

//*****EXAMPLES */
// JavaScript Date (All in One Block)

// Current Date & Time
let today = new Date();

console.log(today);                    // Current Date & Time
console.log(today.toString());         // Full Date String
console.log(today.toDateString());     // Tue Jul 28 2026
console.log(today.toTimeString());     // Current Time
console.log(today.toLocaleDateString());// Locale Date
console.log(today.toLocaleTimeString());// Locale Time
console.log(today.toLocaleString());   // Date & Time

// Get Methods
console.log(today.getFullYear());      // Year
console.log(today.getMonth());         // Month (0-11)
console.log(today.getDate());          // Day of Month (1-31)
console.log(today.getDay());           // Day of Week (0=Sun, 6=Sat)
console.log(today.getHours());         // Hours
console.log(today.getMinutes());       // Minutes
console.log(today.getSeconds());       // Seconds
console.log(today.getMilliseconds());  // Milliseconds
console.log(today.getTime());          // Milliseconds since Jan 1, 1970

// Set Methods
let date = new Date();

date.setFullYear(2027);
date.setMonth(11);     // December (0-based)
date.setDate(25);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);

console.log(date);

// Create Custom Date
let customDate = new Date(2026, 6, 28);          // 28 July 2026
let customDateTime = new Date(2026, 6, 28, 10, 30, 0);

console.log(customDate);
console.log(customDateTime);

// Date.now()
console.log(Date.now()); // Current timestamp in milliseconds

// Convert Timestamp to Date
