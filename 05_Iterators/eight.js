//reduce

const myNum = [1,2,3,4,5,6,7,8,9]

// const myTotal =  myNum.reduce( function(acc,curVal) {
//     console.log(` acc val  = ${acc} and curr val = ${curVal}`);
//     return acc + curVal
// },0 )

// const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)

const shopingCart = [
    {
        itemName: "javascript",
        price : 844
    },
    {
        itemName: "java",
        price : 4500
    },
    {
        itemName: "python",
        price : 452
    },
    {
        itemName: "Data science",
        price : 844
    }
]


const myTotal = shopingCart.reduce( (acc, currval) => 
    acc+currval.price,0)
console.log(myTotal);
