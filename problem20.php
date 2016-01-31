<?php
//n! means n × (n − 1) × ... × 3 × 2 × 1
//For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
//    and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//Find the sum of the digits in the number 100!
$x = 100;
$array = array();
$product = 1;
$sum = 0;

while ($x > 0) {
array_push($array, $x);
$x -= 1;
}

for ($i = 0; $i < count($array); $i++) {
$product = $product * $array[$i];
}
$stringProduct = (string)$product;
$newArray = str_split($stringProduct);

for ($z = 0; $z < count($newArray); $z++) {
$curNum = (int)$newArray[$z];
$sum = $sum + $curNum;
}
echo '<pre> SUM   ==>';
print_r($sum);
echo '</pre>';

?>