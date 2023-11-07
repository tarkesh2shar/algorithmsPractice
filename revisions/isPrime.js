/**
 * Determing wheather an input number is a prime number;
 */

function isEven(number){
    return number%2===0;
}

// console.log(isEven(9));
// console.log(isEven(8));

function isPrime(number){
    for (let index = 2; index < number; index++) {
        if(number%index===0){
            return false
        }
    }
    return true;
}
console.log(isPrime(9))
console.log(isPrime(5))