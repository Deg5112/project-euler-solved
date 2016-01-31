
function sum_of_multiples(num){
    var total = 0
    for(var x = 1; x<num;x++){
        if(x%3==0||x%5==0){
            total += x;
        }
    }
    return total;
}

sum_of_multiples(1000);

