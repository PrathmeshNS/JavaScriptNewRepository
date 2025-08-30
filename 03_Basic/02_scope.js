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


//++++++++++++++++ Interesting +++++++++++++++++

function addOne(num) {
    return num + 1
}

addOne(5)


addTwo(5) //when we declere the function with assignable value is not allowed you called it before the declearation. it also called as hosting

const addTwo = function(num) {
    return num + 2
}






