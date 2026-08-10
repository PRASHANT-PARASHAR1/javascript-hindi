class User{
    constructor(Username){
        this.Username=Username
    }
    logMe(){
        console.log(`username:${this.Username}`);
        
    }
    createId(){
        return `123`
    }

}
             
const prashant = new User("prashant")
console.log(prashant);
console.log(prashant.createId());
console.log(prashant.logMe());

class Teacher extends User {
    constructor(Username,email){
        super(Username)
        this.email=email
        console.log(`Email is ${this.email}`);
        console.log(`username is ${this.Username}`);
        
    }
}
const obj2 = new Teacher("ram","ram@123")





