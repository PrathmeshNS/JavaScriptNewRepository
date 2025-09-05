const coding = ["js", "python", "java", "cpp", "ruby"]

coding.forEach( function (element) {
    // console.log(element);    
})

coding.forEach( (item) =>{
    // console.log(item);
}) 

function printMe(item){
    // console.log(item)
}

coding.forEach(printMe)


coding.forEach( (element, index, arr) =>{
    // console.log(element, index, arr);
})

const myCod =[

    {
        languageName :"java",
        languageFileName: "java"
    },
    {
        languageName :"python",
        languageFileName: "py"
    },
    {
        languageName :"javascript",
        languageFileName: "js"
    }
]



myCod.forEach( (item) => {
    console.log(item.languageFileName);
})