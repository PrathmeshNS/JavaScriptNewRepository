let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());

// let myCreaateDate = new Date(2003,11,8)
// let myCreaateDate = new Date(2003,11,8,2,15)
// let myCreaateDate = new Date("2003-12-8")// 
let myCreaateDate = new Date("04-28-2004")
// console.log(myCreaateDate.toLocaleString()) ;

let myTimeStamp = Date.now()
 
// if(myCreaateDate.getTime() <= myTimeStamp)
//     console.log("Yes");
// console.log(myTimeStamp / 1000 );

let newDate = new Date()
console.log(newDate.toLocaleString('defulat',{
    weekday : "long",
    day:"2-digit",
    year:"numeric"
}));






