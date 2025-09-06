const myNum = [1,6,8,9,7,23,65,4]

// const newNum = myNum.map( (num) => num + 10)
// const newNum = myNum.map( (num) => { 
//     if (num > 10) {
//         return num + 10
//     }
//     return num
//  })

const newNum = myNum
            .map( (num) => num * 10)
            .map( (num) => num + 1 )
            .filter( (num) => num >= 40)


console.log(myNum);

 console.log(newNum);
 






