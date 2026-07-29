// const chai = function() {
//     let username="hitesh"
//     console.log(this.username)  //output is undefined
// }
// chai();

const user = {
    name: "Prashant",
    age: 20,

    greet() {
        console.log(this.name);
        console.log(this.age);
    }
};

user.greet();

console.log(this)