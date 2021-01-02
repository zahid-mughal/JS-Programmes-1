function checkPrime(number){
    let flag=true;
    if(number !=1){

    if(number > 1){
        for(let i=2;i<number;i++){
            if(number%i == 0){
                flag=false;
                break;
            }
        }
    }else{
        flag=true;
    }
    if(flag==true){
        console.log(`${number} is a prime number.`);
    }else{
        console.log(`${number} is not a prime number.`);
    }
}else{
    console.log("its not prime");
}

}

const r = require("readline");
const r1 = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter A Number : ", function(num) {
    checkPrime(num);
    r1.close();
});
