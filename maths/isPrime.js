//whether number is prime number or not//

function isPrime(n){
    let isprime=true;
    for (let i = 0; i <n; i++) {
        if (i==1) continue;
        if(n%i===0){
            isprime=false;
        }
    }
    return isprime;
}

function isPrimee(n){
    for (let i = 2; i < n; i++){
        if(n%i===0){
            return false
        }
    }
    return true;
}

function isPrimeEffecient(n){
    for (let i = 2; i < Math.sqrt(n); i++){
        if(n%i===0){
            return false
        }
    }
    return true;
}

// function isPrime(n){                  
//     let isprime=true;                1
//     for (let i = 0; i <n; i++) {     1
//         if (i==1) continue;          n
//         if(n%i===0){                 n
//             isprime=false;           1
//         }
//     }
//     return isprime;                  1
// }

// function isPrimee(n){
//     for (let i = 2; i < n; i++){    1
//         if(n%i===0){                n  
//             return false            1
//         }
//     }
//     return true;                     1
// }

console.log(isPrime(18));
console.log(isPrimee(18));
console.log(isPrimeEffecient(18));  O(sqrt(N))  //---> WOWW