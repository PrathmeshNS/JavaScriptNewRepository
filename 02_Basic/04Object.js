// const tinderUser = new Object() // this is the singlton object

const tinderuser = {} //non singleton user 

tinderuser.id = "we4221"
tinderuser.name = "prathmesh"
tinderuser.isLoggedIn  = false

// console.log(tinderuser);

const regularUser = {
    email : "ps@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Prathmesh",
            lastName : "N S"
        }
    }
}


// console.log(regularUser.fullName)


const  obj1 =  {
    1:'d',
    2:'s',
    3:'d'
}

const  obj2 =  {
    4:'p',
    5:'n',
    6:'s'
}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

usr = [
    {
        id : '5ds21sd',
        name :"pscode"
    },
     {
        id : '78ds64',
        name :"ps"
    },
     {
        id : '776sd',
        name :"pns"
    }
]

// console.log(usr[1].email)
// console.log(tinderuser);


// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName : "Java Spring",
    price : 455,
    courseInstructor : "prathmesh"
}


// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor:instructor} = course //destructuring on the object
console.log(instructor);


