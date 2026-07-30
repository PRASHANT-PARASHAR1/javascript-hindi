const myNums = [1,2,3,4,5,6,7,8,9,10]
const add=myNums.filter( (num)=>{
      return num>4                       //filter m condition bhi de sakte h
})     
console.log(add)


// ================================
// filter() + map() + reduce()
// ================================

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter() -> Select only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Filter:", evenNumbers);
// Output: [2, 4, 6, 8, 10]

// map() -> Multiply each number by 10
const multiplied = numbers.map(num => num * 10);
console.log("Map:", multiplied);
// Output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// reduce() -> Find the sum of all numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce:", sum);
// Output: 55

// Chaining filter + map + reduce
const result = numbers
  .filter(num => num % 2 === 0)   // [2, 4, 6, 8, 10]
  .map(num => num * 10)           // [20, 40, 60, 80, 100]
  .reduce((acc, curr) => acc + curr, 0); // 300

console.log("Final Result:", result);
// Output: 300

const myCourse = [
    {
        courseName:"javascript",
        price:999
    },
    {
        courseName:"data science",
        price:5999
    },
    {
        courseName:"machine learning",
        price:12999
    },
]
const myTotal=myCourse.reduce( (acc,curr)=>{
    acc+curr
    return acc+curr.price
},0)
console.log(myTotal)