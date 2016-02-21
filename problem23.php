<?php
/*
 A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example,
the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum
exceeds n.As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the
sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can
be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even
 though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

//How I interpret this.
//every integer > 28123 can be found by adding two abundant numbers (if sum of digits of n > n )
//not true for every integer < 28123
//find all integers < 28123 that can not be the sum of two abundant numbers
//add all of them up, and return sum

//step 1, find all abundant numbers below 28123
//step 2, loop through the list, and find all of the possible sums of these numbers below the limit
//step 3, if any number below 28123 is not on the abundant sum list, push into new array
//step 4, find the sum of each number in the array. return it.

set_time_limit(90);
ini_set('memory_limit', '-1');
function findAbundantNums($limit)
{
    //optimize, divide limit in two, max sum would be half the limit * 2
    $possibleAbundantSums = [];
    $limit = $limit/2;
    $abundantArray = [];
    $abundantSums = [];
    $integersNotSumOfAbundants = [];
    for ($n = 2; $n < $limit; $n++) {  //for each number under limit
        $array = [];
        for ($y = 1; $y < $n; $y++) { //for each number from 1 & <the current iteration

            if ($n % $y === 0) {//if it divides evenly, push current divisor it into an array, that we'll add up

                array_push($array, $y);
            }
        }
        $length = count($array);
        $sum = 0;

        for ($z = 0; $z < $length; $z++) { //now that we have all of the nums that divide evenly for that iteration, loop through and add them up.
            $sum += $array[$z];
        }
        //now we have sum of divisors for current iteration, check if it's an abundant, if so, push into abundant array
        if ($sum > $n) {
            array_push($abundantArray, $n);
        }
    }
    $abundantLength = count($abundantArray);

    for($a = 0; $a<$abundantLength; $a++){ //for each item in this array, find all possible sums;
        for($s = $a; $s<$abundantLength; $s++){ //for each num equal to current iteration and afterward, until less than limit
            $currentSum = $abundantArray[$a] + $abundantArray[$s];
            array_push($abundantSums, $currentSum);
            if($currentSum>$limit){ //once we get here, find all digits that aren't equal to each sum
                for($b=1;$b<100;$b++){//find all numbers below limit than can't be found by adding two abundants
                    $bool = true;
                    foreach($abundantSums as $value){
                       if($b === $value){ //if current iteration is equal to any abundantSums, break, go to next iteration
                           $bool = false;
                           break;
                       }
                    }
                    if($bool){
                        array_push($integersNotSumOfAbundants, $b);
                    }
                }
                $finalSum = 0;
                foreach($integersNotSumOfAbundants as $value){
                    $finalSum += $value;
                }
                echo '==> '.$finalSum;
                return;
            }

        }
    }
}
findAbundantNums(28123);
//3840

?>