Find sum of even fib

first we define our starting point var x = 1 for the sequence. Along with a sum that'll change depending on if b has a remainder of 0. 
we also declare our starting variables that will change, and generate a new variable b. 
We use a while loop because the sequence is undefined, until we define it at the end. Because we have to find how to get 3, we know 
that value (a=1)+(b=2)=3. Therefore we can conquer that how we go up in the sequence, our initial value x must = a. 
but once we find 3, how does a change? a is our new b (a=b), and finally our fib number, our new b, will always therefor be new b = current b + new a which
we defined before. 

function evenFib(limit) {
    var sum = 0;
    var x, a = 1;
    var b = 2
    while(b<limit){
        if(b%2==0){
            sum +=b;
        }
        x = a;
        a = b;
        b += a;
    }
    return sum;
}

evenFib(4000000);
   => 4194302
