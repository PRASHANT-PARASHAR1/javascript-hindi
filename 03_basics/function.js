// =========================
// JAVASCRIPT FUNCTIONS
// =========================

// 1. Function Declaration
function greet() {
    console.log("Hello");
}
greet();

// -------------------------

// 2. Function with Parameters
function add(a, b) {
    console.log(a + b);
}
add(10, 20);

// -------------------------

// 3. Function with Return
function multiply(a, b) {
    return a * b;
}
let result = multiply(5, 4);
console.log(result);

// -------------------------

// 4. Function Expression
const welcome = function () {
    console.log("Welcome");
};
welcome();

// -------------------------

// 5. Arrow Function
const square = (num) => {
    return num * num;
};
console.log(square(6));

// Short Arrow Function
const cube = num => num * num * num;
console.log(cube(3));

// -------------------------

// 6. Anonymous Function
setTimeout(function () {
    console.log("Anonymous Function");
}, 1000);

// -------------------------

// 7. IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE Executed");
})();

// -------------------------

// 8. Callback Function
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Good Bye");
}

greetUser("Prashant", bye);

// -------------------------

// 9. Default Parameters
function login(user = "Guest") {
    console.log("Welcome " + user);
}
login();
login("Prashant");

// -------------------------

// 10. Rest Parameters
function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}
console.log(sum(10, 20, 30, 40));

// -------------------------

// 11. Returning Another Function
function outer() {
    return function () {
        console.log("Inner Function");
    };
}

const inner = outer();
inner();

// -------------------------

// 12. Recursive Function
function countdown(n) {
    if (n === 0) {
        console.log("Done");
        return;
    }

    console.log(n);
    countdown(n - 1);
}
countdown(5);

//*********example by me  */
const user = {
    userName:"raghav",
    age:10
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and age is ${anyObject.age}`)
}
handleObject(user)
