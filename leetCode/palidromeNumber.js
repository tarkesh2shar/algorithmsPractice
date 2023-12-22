// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    if(x<0){
        return false;
    } 
    if(x<10 && x>0){
        return true;
    }
    // const lastDigit= x%10;
    // const secondLastDigit=Math.floor(x/10)%10;
    // const thirdLastDigit= Math.floor(x/100)%10;
    // const forthLastDigit= Math.floor(x/1000)%10;
    // const fifthLastDigit= Math.floor(x/10000)%10;
    // const sixthLastDigit= Math.floor(x/100000)%10;
    // const seventhLastDigit= Math.floor(x/1000000)%10;
    // const eightLastDigit= Math.floor(x/10000000)%10;
    // const ninthLastDigit= Math.floor(x/100000000)%10;
    // const tenthLastDigit= Math.floor(x/1000000000)%10;

    // let lastDigitExtractor ;
    let stringifiedReverseDigits="";
    let basePower= 1;
    let isApprochingLastDigit=false;
    while(!isApprochingLastDigit){
        const numByBase= Math.floor(x/basePower);
        if(numByBase>=0&&numByBase<10){
            isApprochingLastDigit=true;
        }
        let nthLastDigit = numByBase % 10;
        stringifiedReverseDigits+=nthLastDigit;
        basePower=basePower*10;
    }

    const  y=  Number.parseInt(stringifiedReverseDigits);


  return x === y;





    
    
};



// console.log(isPalindrome(123456789));
// console.log(isPalindrome(-121));
console.log(isPalindrome(121));
// console.log(isPalindrome(1001));
// console.log(isPalindrome(0));