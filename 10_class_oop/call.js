function SetUsername(username){
    this.username
    console.log(`username is ${username}`);
    
}
function createUser(username,email,password){
    SetUsername.call(username)
    this.username=username
    this.email = email
    this.password = password
}

const result = new createUser("prashant","prashant@123","123")
 // console.log(result);
