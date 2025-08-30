const user = {
    username : "prathmesh",
    price : 1654,
    welcomeMessage:function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage

// user.welcomeMessage()
// user.username = "pscode"
// user.welcomeMessage()


// function chai() {
//     let username = "pscode"
//     console.log(this.username);
// }

// chai()

// const chai = () =>{
//     username = "pscode"
//     console.log(this);
// }

// chai()


// const addTwo = (num1,num2) =>{
//     return num1 + num2 //explicit returns we need to write the return keyword
// }


// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2) // implicite return when we user the parenthesis 


const addTwo = (num1 , num2) => ({username : "pscode"}) //return the object in this way

// console.log(addTwo(8 , 28))

// const arr = [45,54,346,5,54,654,1]

// arr.forEach( )


