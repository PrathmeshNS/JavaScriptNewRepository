// Immediately Invoked Function Expression (IIFE)

(function chai(params) {
    console.log("Databased Connected!!!");
})(); // auto calling does not know were to stop.


( (name) => {
    console.log(`Databased Connected Successfully ${name}`);
})('pscode');


   




