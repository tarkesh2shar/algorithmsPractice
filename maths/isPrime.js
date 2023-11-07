//whether number is prime number or not//

function isPrime(n){
    let isprime=true;                    // 1 
    for (let i = 0; i <n; i++) {         // 1 
        if (i==1) continue;              // 1
        if(n%i===0){                     // n-1
            isprime=false;
        }
    }
    return isprime;                      // 1  
}
// 1*n+3     ---> O(n)  Linear 
   

function isPrimee(n){
    for (let i = 2; i < n; i++){    // 1
        if(n%i===0){                    // 1  --> Best case scenrio ---->   O(1)
            return false                // n-2 
        }
    }
    return true;
}  // O(n)
//            18 -->  4*4
//             9  --> 3*3
//             10 --> 3.12... * 3.12
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

// console.log(isPrime(18));
// console.log(isPrimee(18));
// console.log(isPrimeEffecient(18));  O(sqrt(N))  //---> WOWW

console.log(isPrimeEffecient(18))
console.log(isPrimeEffecient(10));
console.log(isPrimeEffecient(17));