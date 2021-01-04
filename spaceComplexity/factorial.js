function getFactorial(n){           //1
    let result=1;                   //1  
    for (let i = 2; i <=n; i++) {   
        result=result*i;            
    }
    return result;
}

// O(n)

//Space Complexity: O(1)
//We operate on one and the same number , no new ('permant')
//value is created per iteration

console.log(getFactorial(3));
console.log(getFactorial(5));
console.log(getFactorial(10));