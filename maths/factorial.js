function getFactorial(n){
    let result=1;
    for (let i = 2; i <=n; i++) {
        result=result*i;
    }
    return result;
}

// O(n)

console.log(getFactorial(3));
console.log(getFactorial(5));
console.log(getFactorial(10));