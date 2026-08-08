const user = {
    username:"prashant",
    loginCount:8,
    signedIn:true,
    // getUserDetails: function(){
    //     console.log(this)
    //     console.log(`username is ${this.username}`)

    // }

}
//console.log(user.username)


    function User(username,loginCount,isLoggedIn){
        this.username=username;
        this.loginCount=loginCount;
        this.isLoggedIn=isLoggedIn
        return this

    }
    const userOne = new User("prashant",12,true)
    const userTwo = new User("kaushal",28,false)
    console.log(userTwo)
    

