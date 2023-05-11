var num = userInput[0].split(" ").map(Number);

var n1=num[0];

var n2=num[1];

var HFC = 1;

for(var i=1; i<=n1||i<=n2; i++){
    
    if(n1%i==0 && n2%i==0){
        HFC=i;
    }
}
 
console.log(HFC);