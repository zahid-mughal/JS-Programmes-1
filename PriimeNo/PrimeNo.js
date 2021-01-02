const ob = require('readline');
const userInput = ob.createInterface(process.stdin, process.stdout);
userInput.question("Enter Your Name...", function(n){
   

userInput.question("Enter Number...", function(p){
    // console.log(`Hi ${n} </br>  ${hightInCm(i)}`);
    console.log(`Hi ${n}. Your Typed Number`);
    checkPrimNo(p);
   
userInput.close();
})
})
// userInput.on("close",function(){
// console.log("thanks for convert Inches in to Centimetre...")
// })
function checkPrimNo(num){
    let flag=true;
    if(num != 1){
    if(num > 1){
        for(let i=2;i<num;i++){
            if(num%i == 0){
                flag=false;
                break;
            }
        }
    }else{
        flag=true;
    }
    if(flag==true){
        console.log(`${num} is a prime number.`);
    }else{
        console.log(`${num} is not a prime number.`);
    }
}else{
    console.log(`${num} is not a prime number.`);
} 
    
}
 
