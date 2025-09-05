// for 

for (let index = 0; index < 10; index++) {
    const element = index
    if (element == 5) {
        // console.log("5 is best number");
        
    }
    // console.log(element); 
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value : ${i}`);
    for (let j = 1; j <=10; j++) {
        // console.log(`${i}  * ${j} = ${i*j}`);              
    }
}

let myArray = ['thanos, batman', 'superman', 'rohit', 'dr. strange']
for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
}

//break and continue

for (let i = 0; i <=10; i++) {
    if (i == 5) {
        console.log("Detected 5");
        break;        
    }
    console.log(`Values of i is ${i}`);
}

for (let i = 0; i <=10; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue;        
    }
    console.log(`Values of i is ${i}`);
        
}




