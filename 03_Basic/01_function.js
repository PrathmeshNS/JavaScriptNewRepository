//functions

function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("T");
    console.log("H");
    console.log("M");
    console.log("E");
    console.log("S");
    console.log("H");
}


// sayMyName //reference only

// sayMyName()

// function addTwoNumbers(number1, number2) { // when we create an defination of the function then the values called as parameter.
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) { // when we create an defination of the function then the values called as parameter.
    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result =  addTwoNumbers(5 ,5) // when you pass the value to the function is called as argument
// console.log("Result : ",result);


function loginUserMessage(username) {
    if (!username) {
        return "please enter a username"
    }
    return `${username} just logged in`
}

// const re = loginUserMessage()
// console.log(re);


function calculateCartprice(...num) {
    return num
}

// console.log(calculateCartprice(445,458,698,100,255,355,455));

const user = {
    username :"prathmesh",
    price :999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and pirce is ${anyObject.price}.`);   
}

handleObject(user)

