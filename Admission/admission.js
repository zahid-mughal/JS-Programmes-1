const ob = require('readline');
let userInput = ob.createInterface(process.stdin,process.stdout);
userInput.question("Enter Your Name: ",function(n){

userInput.question("Enter Your 1st Subject Marks: ",function(m1){
userInput.question("Enter Your 2nd Subject Marks: ",function(m2){
userInput.question("Enter Your 3rd Subject Marks: ",function(m3){
 let onReject = "Your Marks Below 80, Rejected!";
 let onSucces = "Your Marks Above 80, Granted for Admission";

let sum = parseFloat(m1) +parseFloat(m2) +parseFloat(m3);
 let average =parseFloat(sum/3);

 if(average > 80){
    console.log(`Mr/Ms.${n} ${onSucces}`);
 }else{
    console.log(`Mr/Ms.${n} ${onReject}`);

 };

 
 userInput.close();
});
});
});
});
