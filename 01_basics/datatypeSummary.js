// primitive 

//7 types: String, Number, Boolearn, Null, undefined,Symbol,BigInt

//Reference (Non primitive)

// Array, Object,functions



//********** STACK AND HEAP MEMORY ************

//stack(Primitive), Heap(non-primitive)

//stack example
let score=30;
let scorecard=score;
scorecard=45;

console.log(score);    //30
console.log(scorecard);  //45

//but heap are different for stack we can take a example of heap

let userOne = {
    email: "prashant112007@gmail.com"
}

let usertwo=userOne;
usertwo.email="raminfinite@gmail.com";
console.log(userOne.email);
console.log(usertwo.email);
