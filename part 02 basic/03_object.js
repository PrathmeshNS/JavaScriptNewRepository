//singleton
//Object.create

// object literals

const mySim = Symbol("myKey1")

const JsUser = {
    name : "Prathmesh ",
    "Full Name" : "Prathmesh N S",
    [mySim] : "myKey1",
    email : "ps@gmail.com",
    age : 22,
    location : "vinchur",
    isLoggedIn : false,
    lastLogin : ["Monday", "Friday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["Full Name"])

// console.log(JsUser[mySim]);

JsUser.email = "ps@google.com"
// console.log(JsUser);

// Object.freeze(JsUser)

JsUser.email = "ps@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello from the js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())
