//So as long as you know the slice() method of the array object, you'll be fine.
//the thing to keep in mind is here, is that the positions are referencing the index number of the array of digits.
//so if arr.length gives you 100. the index of the last integer is 99. so 100-13 = 87. 99-77=12. So only 12 digits this will count.
///*find greatest product of 13 adjacent digits..
//
//So we say position 1 needs to be < arr.length -(ammount of adjacent digits) to tell us where to stop at.
//once we know our two parameters, we can find the current product from a for inloop and the slice method.
//than we can do the familiar loop of "is this greater than that, if so, this = that. the while loop than jumps up after
//this this>that conditional statement, with pos1 += 1 & pos2 = pos1 + 12, to check the next set of parameters within the array.*/


function findAdjacent(num){
    var arr = num.toString().split('');
    var pos1 = 0;
    var pos2 = pos1 + 12;
    var greatestP = 1;
    
    while (pos1 <= arr.length - 13 ) {
        currentP = 1;
        for (var i in arr.slice(pos1, pos2+1)) {
            currentP *= arr[i];
        }
        if (currentP > greatestP) { 
        greatestP = currentP; 
        }
        pos1 += 1;
        pos2 = pos1 + 12;
    }
    return greatestP;
}

function findAdjacent(num);
