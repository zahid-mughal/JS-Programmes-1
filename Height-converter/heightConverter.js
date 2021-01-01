const ob = require('readline');
const userInput = ob.createInterface(process.stdin, process.stdout);
userInput.question("Enter Your Height(in Inches)...", function(i){
    hightInCm(i);


userInput.close();
})
    

userInput.on("close",function(){

console.log("thanks for convert Inches in to Centimetre...")

})
function hightInCm(inches){
    cm = 2.54 * inches;
    console.log(`${inches} Inches Equal to: ${cm}cm`)

}