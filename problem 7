This is where this starts to get fun. 
typically we've seeing the input/arguement for the function to be a limit of numbers, to work with. 
now we don't have a limit, we're test every number to see if it's a prime, if it is, 
i pushed it into an array, and added 1 to the counter, making sure the counter does not exceed the
arguement for which spot in the sequence or array to not surpass. Once again, it's more simple than you
would think. 

function isPrime(num){
    for(var x = 2; x<num; x++){
        if(num%x===0){
            return false;
        }
    }
    return true;
}

function findPrime(num){
    var arr = [];
    var x = 0;
    for(var i = 2; x<num; i++){
        if(isPrime(i)){
            arr.push(i);
            x += 1;
        }
    }   
    return arr[num-1];
}

findPrime(10001);
