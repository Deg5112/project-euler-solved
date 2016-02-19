/*This one was tricky but not terrible. 
You have to first write a program that spits out the sequence. The problem gave
us a lot of info to work with so we know the sequence stops when the current num is 1. so I made a funciton that 
spits out the sequence, then another function that loops through 1-->limit, compares the length of the current
array to the max length, if the current is not only greater than the max, which then maxLength=currentLength, 
but the array itself is also the winner/result we want to store in a new array object; */

//returns longest sequence of any num between 1-1mil
function findStart_LongestChain(n){
    var maxLength = 0;
    var finalArr;
    for(var x = 2; x<=n;x++){
        var currentLength = returnSequenceOfStart(x).length;
        if(currentLength>maxLength){
            maxLength = currentLength;
            finalArr = returnSequenceOfStart(x);
        }
    }
    return finalArr[0];
}
//returning sequence
function returnSequenceOfStart(n){
var arr = [n];
var next;
var x = 0;
    while(arr[x]>1){
        if(arr[x]%2===0){
            next = arr[x]/2;
        }else{
            next = 3*arr[x] + 1;
        }
        arr.push(next);
        x++;
    }
    return arr;
}

findStart_LongestChain(1000000);
