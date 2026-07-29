// var scope ke bahar bhi value show karta hso we do not use the var
x=10;
if(x==10){
    let a = 10
const b=20
var c=30

}
console.log(c);

// =========================
// SCOPE IN JAVASCRIPT
// =========================

// Scope = Kisi variable ko code ke kis part se access kiya ja sakta hai.

// JavaScript me mainly 4 types ke scope hote hain:
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Lexical Scope

// =====================================
// 1. Global Scope
// =====================================

let name = "Prashant"; // Global Variable

function showName() {
    console.log(name);
}

showName();
console.log(name);

// Output:
// Prashant
// Prashant


// =====================================
// 2. Function Scope
// =====================================

function demo() {
    let age = 20; // Sirf isi function ke andar accessible
    console.log(age);
}

demo();

// console.log(age); // Error: age is not defined


// =====================================
// 3. Block Scope (let & const)
// =====================================

{
    let city = "Aligarh";
    const state = "Uttar Pradesh";

    console.log(city);
    console.log(state);
}

// console.log(city);   // Error
// console.log(state);  // Error


// =====================================
// var is NOT Block Scoped
// =====================================

{
    var country = "India";
}

console.log(country); // India


// =====================================
// 4. Lexical Scope
// =====================================

let language = "JavaScript";

function outer() {

    let course = "Web Development";

    function inner() {
        console.log(language); // Global Scope
        console.log(course);   // Outer Function Scope
    }

    inner();
}

outer();

// Output:
// JavaScript
// Web Development


// =====================================
// Shadowing
// =====================================

let x = 100;

function test() {
    let x = 200;
    console.log(x);
}

test();
console.log(x);

// Output:
// 200
// 100


// =====================================
// var vs let vs const
// =====================================

// var
var a = 10;
{
    var a = 20;
}
console.log(a); // 20

// let
let b = 10;
{
    let b = 20;
}
console.log(b); // 10

// const
const c = 10;
// c = 20; // Error


// =====================================
// Interview Example
// =====================================

let message = "Hello";

function first() {
    let user = "Prashant";

    function second() {
        console.log(message);
        console.log(user);
    }

    second();
}

first();

// Output:
// Hello
// Prashant