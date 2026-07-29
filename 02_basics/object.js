// const user = {
//   name: "Prashant",
//   age: 20,
//   city: "Aligarh",
//   email: "prashant@example.com",
//   isLoggedIn: true
// };
// // console.log(user.name)
// // console.log(user["age"])


// const user2 = {
//     name: "virat kohli",
//     age:39,
//     email:"virat@123",

//     user3 ={
// name:"satyapal singh",
// age:28,
// email:"satyapalsinghlapur@123"
//    }


// };
// console.log(user["name"]);
// console.log(user2["name"]);
// console.log(user3["name"]);

// const person = new Object()
// person.name="prashant parashar"
// person.age=20
// console.log(person.name)
// console.log(person.age)

const user = {
  name:"prashant parashar",
  age:20,
  email:"prashant@gmail.com"

}
//console.log(user.name,user.email,user.age)

const regularUser = {
  email:"prashant@gmail.com",
  fullName:{
    userFullname : {
     firstName:"DJ",
    lastName:"bravo"
    }
   
  }
}
//console.log(regularUser.fullName.userFullname.firstName)

const course = {
courseName:"js hindi",
price:999,
courseInstructor:"prashant parashar"
}
const {courseInstructor:simple} = course  //yahan pr courseInstructor ka simple nam rakha h
console.log(simple);








