const ob = require('readline');
const userInput = ob.createInterface(process.stdin, process.stdout);
userInput.question("Enter Your Height(in Inches)...", function(I){
    hightInCm(I);


})
    
