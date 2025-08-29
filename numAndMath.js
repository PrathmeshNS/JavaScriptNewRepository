score = 40
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.655454
// console.log(otherNumber.toPrecision(3));

const hundreds = 10020012
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Math  +++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.65));
// console.log(Math.floor(4.65));
// console.log((Math.random()*10)+1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1))+min)



const select = ["Stone", "Paper", "Scizers"]


computerSelect = select[Math.floor(Math.random() * 3)]

youSelect = select[Math.floor(Math.random() * 3)]

if (computerSelect == select[0]) {
    if (youSelect == select[1]) {
        console.log(`Congratulation you win!! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
    }
    if (youSelect == select[0]) {
        console.log(`Match Tiee !! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
    } 
    if (youSelect == select[2]) {
        console.log(`You Loss!! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
    }
}

if (computerSelect == select[1]) {
    if (youSelect == select[0]) {
        console.log(`Congratulation you win!! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
    } 
    if (youSelect == select[1]) {
        console.log(`Match Tiee !! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
    }
    if (youSelect == select[2]) {
        console.log(`You Loss!! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
    }
}

if (computerSelect == select[2]) {
    if (youSelect == select[0]) {
        console.log(`Congratulation you win!! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
        } 
    if (youSelect == select[1]) {
        console.log(`You Loss!! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
    }
    if (youSelect == select[2]) {
        console.log(`Match Tiee !! \n
            You Select ${youSelect} and Computer Select ${computerSelect}`);
    }
}

