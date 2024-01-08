// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


var mySqrt = function(x) {

    for (let i = 0; i <= x; i++) {
        if(i*i <=x && (i+1)*(i+1) >x){
            return i
        }
    }
    
};

var mySqrtBinarySearch=function(x){
    let left=0;
    let right=x;
    while (left<=right){
        mid=Math.floor((left+right)/2);
        if(mid*mid<x){
            left=mid+1;
        }else if(mid*mid>x){
          right=mid-1;
        }else{
            return mid;
        }
    }
    return right;
}


console.log(mySqrt(4));
console.log(mySqrt(6));
console.log(mySqrt(8));
console.log(mySqrt(16));
console.log("********");
console.log(mySqrtBinarySearch(4));
console.log(mySqrtBinarySearch(6));
console.log(mySqrtBinarySearch(8));
console.log(mySqrtBinarySearch(16));