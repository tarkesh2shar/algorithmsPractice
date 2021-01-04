function fib(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return fib(n-1) + fib (n-2)
}

//Loop execution = O(N)
//Fibbonaci execution O(2^n)
 console.log(fib(40));

