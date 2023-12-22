// golden ratio ,
// 1,1,2,3,5,8,13,21......

/**
 * Return the nth element of fibonacci sequence.
 * fib(4) -- >5
 */
// [1] 

function fib(number) {
  const fibArray = [];    
  while (fibArray.length < number) {
    if (fibArray.length === 0) {
      fibArray.push(1);  
    } else {
      if (fibArray[fibArray.length - 1] && fibArray[fibArray.length - 2]) {
        fibArray.push(
          fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
        );
      } else {
        fibArray.push(fibArray[fibArray.length - 1]);
      }
    }
  }
  return fibArray[number-1];
}

// 1,1,2,3,5,8,13,

function fibbonaciRecursive(number,array=[1,1]){
  if(array.length===number){
    return array[number-1];
  }
  array.push(array[array.length-1] + array[array.length-2])
   return fibbonaciRecursive(number,array);
}

//////////
function recursiveFib(n,memo){
  //exit condition 
 let result;
 if(memo[n]){
  return memo[n];
}
  if(n===0||n===1){
      result = 1
  }else{
    result= recursiveFib(n-1,memo) + recursiveFib(n-2,memo)
  }
    memo[n]=result;
   return result;
}

// function fib(n){
//   let results
//   if(n === 0 || n === 1){
//       results= 1;
//   }
//   results= fib(n-1) + fib (n-2)
//   return results;
// }


// recursiveFib(3) + recursiveFib(2)
// recursiveFib(2) + recursiveFib(1) + recursiveFib(1) + recursiveFib(0)

const memo={}
console.log(recursiveFib(10,memo));

console.log("**memo",memo);
