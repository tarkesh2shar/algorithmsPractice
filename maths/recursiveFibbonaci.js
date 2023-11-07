function fib(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return fib(n-1) + fib (n-2)
}


// [1,1,2,3,5]
// 3 . --> . fin(2) + fib(1)
//     --> fib(1) + fib(0) + fib(1)

/**
 *  4 . -> . fib(3) + fib(2)
 *          fib(1) + fib(0) + fib(1) + fib(1) + fib(0)
 * 5 . --> fib(4) + fib(3)
 *          fib(1) + fib(0) + fib(1) + fib(1) + fib(0) +fib(1) + fib(0) + fib(1)
 */


//Loop execution = O(N)
//Fibbonaci execution O(2^n)
 console.log(fib(40));

