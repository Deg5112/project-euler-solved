function isPal(num){
    var number = num;
    var arr = number.toString().split('');
    for(var x = 0; x<arr.length;x++){
        if(arr[x]===arr[arr.length-(x+1)]){
            return true;
        }
        else{
            return false;
        }
    }
}
        

function largestPal(){
    var mP = 0;
    for(var x = 10; x<100; x++){
        for(var y = x; y<100; y++){
            var cP = x*y;
            if(isPal(cP)){
                if(cP>mP){
                mP=cP;
                }
            }
        }
    }
    return mP;
}



largestPal(10, 99);
