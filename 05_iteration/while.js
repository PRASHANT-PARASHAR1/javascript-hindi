/*
========================================================
                 LOOPS IN JAVASCRIPT
========================================================

Loops are used to execute a block of code repeatedly.

There are 5 main loops in JavaScript:

1. for loop
2. while loop
3. do...while loop
4. for...of loop
5. for...in loop
========================================================
*/


//======================================================
// 1. for LOOP
// Used when you know how many times the loop will run.
//======================================================

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5



//======================================================
// 2. while LOOP
// Runs while the condition is true.
//======================================================

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5



//======================================================
// 3. do...while LOOP
// Executes at least one time.
//======================================================

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5



//======================================================
// 4. for...of LOOP
// Used for Arrays, Strings, Maps, Sets.
//======================================================

const fruits = ["Apple", "Banana", "Mango"];


for(fruit of fruits){
    console.log(fruit)
}




// Output:
// Apple
// Banana
// Mango



// String Example

const name = "PRASHANT";

for (const ch of name) {
    console.log(ch);
}

// Output:
// P
// R
// A
// S
// H
// A
// N
// T



//======================================================
// 5. for...in LOOP
// Used for Objects.
//======================================================

const student = {
    name: "Prashant",
    age: 20,
    course: "B.Tech"
};

for (const key in student) {
    console.log(key, ":", student[key]);
}

// Output:
// name : Prashant
// age : 20
// course : B.Tech



//======================================================
// break Statement
// Stops the loop immediately.
//======================================================

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5



//======================================================
// continue Statement
// Skips the current iteration.
//======================================================

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

