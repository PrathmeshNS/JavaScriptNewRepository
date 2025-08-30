//variable scope
let a = 10
const b = 20 //let and const use for the block level scope only accessible for if, loop, function
var c = 30 // have an gloable scope any one can access it

//make sure whenever you use, used let and cost only not var..

function one() {
    const username = "prathmesh"

    function two() {
        const website = "YouTube"
        console.log(username);
    }
    console.log(website);
    
}




