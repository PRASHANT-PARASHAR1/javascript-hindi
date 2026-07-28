const gameName = new String('prashant parashar')

console.log(gameName.toUpperCase())  //capital 
console.log(gameName.substring(0,4)) //output is Pras


let text = "   Hello   ";
console.log(text.trim()); // Hello

const url = "https://github.com/PRASHANT-PARASHAR1/javascript-hindi"
console.log(url.replace('hindi','english'))  
 //output of this code is 'https://github.com/PRASHANT-PARASHAR1/javascript-english'

//method of string
// JavaScript String Methods (All in One Block)

let str = "  Hello JavaScript World  ";

console.log(str.length);                    // 26
console.log(str.toUpperCase());             // "  HELLO JAVASCRIPT WORLD  "
console.log(str.toLowerCase());             // "  hello javascript world  "
console.log(str.trim());                    // "Hello JavaScript World"
console.log(str.charAt(2));                 // H
console.log(str.at(-1));                    // " " (last character)
console.log(str.indexOf("Java"));           // 8
console.log(str.lastIndexOf("o"));          // 21
console.log(str.includes("Java"));          // true
console.log(str.startsWith("  He"));        // true
console.log(str.endsWith("  "));            // true
console.log(str.slice(2, 7));               // Hello
console.log(str.substring(2, 7));           // Hello
console.log(str.replace("JavaScript", "JS"));// "  Hello JS World  "
console.log("cat cat".replaceAll("cat", "dog")); // dog dog
console.log(str.split(" "));                // Array of words
console.log("Hello".concat(" World"));      // Hello World
console.log("Hi ".repeat(3));               // Hi Hi Hi
console.log("5".padStart(3, "0"));          // 005
console.log("5".padEnd(3, "0"));            // 500
console.log(str.trim().split(" "));         // ["Hello", "JavaScript", "World"]