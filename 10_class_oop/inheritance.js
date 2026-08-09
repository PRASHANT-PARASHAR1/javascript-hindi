class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`userName is ${this.username}`);
        
    }
    
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}
const result = new Teacher("prashant","prashant@123","123")
console.log(result);
console.log(result.addCourse());
console.log(result.logMe());
console.log(User instanceof Teacher);  //false


