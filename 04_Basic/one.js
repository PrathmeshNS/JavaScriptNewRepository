
// if

// const isUserLogggedIn = true
// const temperature = 40

// if ( temperature < 50) {
//     console.log(" Less Than 59=0");
// }
// else{
// console.log(" Temperature is greater than 50");
// }


// const score = 200
// if(score >100){
//     let power = "fly"
//     console.log(`User Power : ${power}`);
// }
//     console.log(`User Power : ${power}`);


const balance = 1100

// // if (balance  > 500) console.log("test");


// if (balance < 500) {
//     console.log(" Less Than 500");
// }
// else if (balance < 750) {
//     console.log("Less Than 750");
// }
// else if (balance < 1000) {
//     console.log("Less Than 1000");
    
// } else {
//     console.log("Less Than 1300");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("Allow to Buy Course!!");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User Logged In!!")
}
