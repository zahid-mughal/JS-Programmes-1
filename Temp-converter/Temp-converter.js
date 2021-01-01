const ob = require('readline');
let userInput = ob.createInterface(process.stdin, process.stdout);
userInput.question("Enter Celcius Temperature... ", function(c){
    const f=9/5*c+32;
    console.log(`${c} Celcius in Fahrenheit is: ${f}`);

    userInput.close();
})
userInput.on("close",function(){

console.log("thanks for your time.");


})