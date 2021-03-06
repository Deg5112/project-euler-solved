//we know the the input(num)=== a + b + c; after after writing the first two loops for a and b(which if we can say
//a and b half to be around less than half of the input, no reason to write the loop for c, because that's just the difference of
//num-a-b=c. Our two conditions while looping through the set of digits, if the first condition is met (false), continue looping.
//once the first condition is met, the second condition test if true for a^2+b^2=c^2, if so, add those digits into an array.
//then a simple for(in) loop can multiply the digits in the arr. after all the for loops and everything is closed,
//just before the final bracket we want the function to return the product (var result);
//

function findPyth(num){
    var arr = [];
    for(var a = 1; a<num/2; a++){
        for(var b = a; b<num/2; b++){
            var c = num - b - a;
            var aSquared = Math.pow(a, 2);
            var bSquared = Math.pow(b, 2);
            var cSquared = Math.pow(c, 2);
            if (! ((c > b)  && (a < b)) ){
                continue;
            }else if((aSquared + bSquared) === cSquared){
                var arr = [a, b, c];
            }
        }
    }
    var result = 1;
    for(var i in arr){
        result *= arr[i];
    }
    return result;
}

findPyth(1000);
