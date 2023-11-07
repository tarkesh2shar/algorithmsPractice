function fact(n){
    let currentNumber=1;
    for (let index = n; index >0; index--) {
    currentNumber= currentNumber*index;
    }
    return currentNumber;
}

// O(n)==> n



// 5*4*3*2*1

function factorial(number){
    if(number==1){
        return 1;
    }
    return number * factorial(number-1)
        
}

///  return 5  * factorial(4) --> 4 *   factorial(3) --> 3 *   factorial(2) ---> 2 *  factorial(1) -->  1
/// .  5 *            4*                        3*                      2 *                 1    

// console.log(fact(5));
console.log(factorial(5));

// 3 * factorial(2)
// 3 * 2 * factorial(1)
// 3 * 2 * 1 
