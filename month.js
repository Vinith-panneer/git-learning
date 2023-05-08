var month=+userInput[0];

if (month>=1 && month<=12){
    if(month==2){
        console.log(28);
    }
    if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==23){
        console.log(31);
    }
    if(month==4 || month==6 || month==9 || month==11){
        console.log(30);
    }
}
else{
    console.log("Error");
}