class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}

const container=new user("prashanr","prashant@123","123")
console.log(container.encryptPassword())

//if we use only function this code 
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const data = new User("india", "ind@gmail.com", "123")

console.log(data.encryptPassword());
console.log(data.changeUsername());