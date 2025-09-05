// const coding = ["js", "python", "java", "cpp", "ruby"]

const myNum = [ 1,8,65,6,68,31,71,3,6]
// const nums = myNum.filter( (element) => element >6)

// const newNum = myNum.filter( (num) =>{
//     return num >4
// })\



const newNum = []
myNum.forEach( (ele) =>{
    if (ele > 4) {
        newNum.push(ele)
    }
})
console.log(newNum);




