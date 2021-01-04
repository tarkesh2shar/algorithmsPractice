function isPowerOfTwo(number){
    if(number<1){
        return false;
    }
    let dividedNumber=number;
    while(dividedNumber!==1){
        if(dividedNumber%2!==0){
            return false;
        }
        dividedNumber=dividedNumber/2;
    }
    return true
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(13));
console.log(isPowerOfTwo(20));
//BEST CASE 13  => 0(1);
//WORST CASE 1125899906842624 => O(log2(n))

//BITWISE MAGIC//

function bitwisePowerOfTwo(n){
  return  n & (n-1) === 0;     // 0(1)
}