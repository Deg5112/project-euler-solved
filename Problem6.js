I just made a function for section, then I did one minus the other one in a separate function to get the difference. 

function sumOfNumbersSquared(num){
var total = 0;
for(var x = 1; x<num+1;x++){
    total += x;
    var squaredTotal = Math.pow(total, 2);
}
return squaredTotal;
}

function sumOfSquaredNumbers(num){
var total = 0
for(var x = 1; x<num+1; x++){
    total += Math.pow(x, 2);
    }
    return total;
}

function differenceOfSquaredTotals(num){
    var difference = sumOfNumbersSquared(num) - sumOfSquaredNumbers(num);
    return difference;
}

differenceOfSquaredTotals(100);
