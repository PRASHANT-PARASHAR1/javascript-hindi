// JavaScript Numbers and Math Methods (All in One Block)

// Number
let num = 123.456;

console.log(num);                     // 123.456
console.log(typeof num);              // number

// Number Methods
console.log(num.toFixed(2));          // 123.46
console.log(num.toPrecision(5));      // 123.46
console.log(num.toString());          // "123.456"
console.log(Number("100"));           // 100
console.log(parseInt("123.45"));      // 123
console.log(parseFloat("123.45"));    // 123.45
console.log(Number.isInteger(10));    // true
console.log(Number.isInteger(10.5));  // false

// Math Methods
console.log(Math.PI);                 // 3.141592653589793
console.log(Math.abs(-25));           // 25
console.log(Math.round(4.6));         // 5
console.log(Math.floor(4.9));         // 4
console.log(Math.ceil(4.1));          // 5
console.log(Math.trunc(4.9));         // 4
console.log(Math.sqrt(25));           // 5
console.log(Math.pow(2, 3));          // 8
console.log(Math.max(10, 20, 30));    // 30
console.log(Math.min(10, 20, 30));    // 10
console.log(Math.random());           // Random number (0 to <1)
console.log(Math.random() * 10);      // 0 to <10
console.log(Math.floor(Math.random() * 10) + 1); // Random integer 1–10