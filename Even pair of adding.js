var arr=[12,4,5,12,8,7,9,5,4,8,7,9,97];

var temp=arr[0];

for(var i=1;i<arr.length;i++){
    
    temp=temp^arr[i];
}

console.log(temp);