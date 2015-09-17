
set a high limit within the function the result will likely be less than. 
setting variable bool to true for each value, you can then write another for loop with a condition
knowing that every statement will return false, therefor setting bool to false.
if 'bool' is still true on a value from the first loop, after ran through the second for statement,
that value will be the first value that passed the test, which is the smallest divisible from 
each number between 1..number.*/


function smallest(num){
    for(var y=num+1; y<10000000000;y++){
        var bool = true;
        for(var x = 1; x<=num; x++){
            if(y%x!==0){
                bool = false;
                break;
            }
        }
        if(bool){
            return y;
        }
    }
}

smallest(20);

=> 232792560
