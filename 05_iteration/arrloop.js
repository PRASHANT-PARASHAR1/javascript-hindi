//for of

const arr = [1,2,3,4,5,6,7,8]
//for(iterator of object)
for(const num of arr){
    //console.log(`arr no is ${num}`)
}

//map
const map = new Map()
map.set('IN',"india")
map.set('SA',"south africa")
map.set('NZ',"newzeland")
map.set('USA',"united states of america")
//console.log(map)
for(const[key,value] of map){
    //console.log(`${key} :- ${value}`)
}

//for in loop

const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObject){
    //console.log(`${key} short cut is for ${myObject[key]}`)
}

//for Each

const coding = ["js","java","python","cpp","ruby"]
//coding.forEach(function(val){
    //console.log(val)               //first method 
//})

// coding.forEach((item)=>{
//     console.log(item)               //second method
//})

coding.forEach( (item,index,arr)=>{    //third method
    //console.log(item,index,arr)
})

const myCoding = [
{
    languageName:"javascript",
    languageFileName:"js"
},
{
    languageName:"java",
    languageFileName:"java"
},
{
    languageName:"python",
    languageFileName:"py"
},
]
myCoding.forEach( (item)=>{
console.log(item.languageName)
})

