const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'Swift by apple'
}


for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}


const programming = ["js", "ruby", "cpp", "java" ,"py"]


for (const key in programming) {
//    console.log(programming[key]);
}

const map = new Map()
map.set("IN","India")
map.set("USD","USA")
map.set("SA","South Africa")
map.set("CH","China")
map.set("FR","France")

for (const key in map) {
    // console.log(key);
}


