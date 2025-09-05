//for of, foreach, 

let myArray = ['thanos, batman', 'superman', 'rohit', 'dr. strange']

for (const element of myArray) {
    // console.log(element);  
}


//maps

const map = new Map()
map.set("IN","India")
map.set("USD","USA")
map.set("SA","South Africa")
map.set("CH","China")
map.set("FR","France")

// console.log(map);


for (const [key,value] of map) {
    // console.log(`${key} = ${value}`);    
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan'
}

for (const [key,value] of myObject) {
    console.log(key, " = ", value);
    
}

