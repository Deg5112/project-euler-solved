//So this one was pretty easy, accept I'm going to start writing this specific test for primes as a function.
//it test all of the numbers under the square root of the limit, it took the browser forever when I wrote a function
//that test all integers under the limit to see if they divide. If none of the integers under the square root divide evenly,
//then its safe to say the number is a prime, using less resources.
//answer: 142913828922

$(document).ready(function(){

    function isPrime(num){
    var test = Math.floor(Math.sqrt(num));
    for (var i=2; i <= test; i++){
            if(num%i===0){
                return false;
            }
        }
        return true;
}

function SumOfPrimes(limit){
    var arr = [];
    var sum = 0;
    for(var x = 2; x<limit; x++){
        if(isPrime(x)){
            arr.push(x);
        }
    }
    for(var i in arr){
        sum += arr[i];
    }
    return sum;
}

    $('div').text(SumOfPrimes(2000000));
});
