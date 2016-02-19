//define a prime, run the function to test if it's a prime, and then of course if the value of x in array is also a factor of the
//number..

function isPrime(number){
    for(var x = 3; x<number; x++){
        if(num%x===0){
            return false;
        }else{
            return true;
        }
    }
}

function largestprime_factor(number){
    var arr = [];
    for(var x=1; x<number;x++){
        if(isPrime(x) && number%x===0){
            arr.push(x);
        }
        var length = arr.length;
        return arr[length-1];
    }
}
