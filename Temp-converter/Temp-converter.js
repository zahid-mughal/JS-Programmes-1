const ob = require('readline');
let userInput = ob.createInterface(process.stdin, process.stdout);
userInput.question("Enter Celcius Temperature... ", function(c){
    // let msg = "";
    const f=9/5*c+32;
    console.log(`${c}Celcius in Fahrenheit is: ${f}`);

    process.exit(0);
})
