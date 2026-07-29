// 4. switch
const day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid Day");
}

// 5. Ternary Operator
const age=34
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

// 6. Logical Operators
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
}

//terniary operator
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);