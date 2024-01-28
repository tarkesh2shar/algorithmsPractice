// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

 

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.
 

// Constraints:

// 1 <= n <= 20
// 1 <= k <= n

const helper=(a,b)=>{
    const allPossibleCombinations= [];
    for (let i = 0; i < a.length; i++) {
        const firstDigit = a[i];
        for (let j = 0; j < b.length; j++) {
            const secondDigit = b[j];
                allPossibleCombinations.push([firstDigit,secondDigit])
        }
    }
    return allPossibleCombinations;
}

// var combine = function(n, k) {
//     const rangeForN=[];
//     const output=[];
//     for (let i = 1; i <= n; i++) {
//         rangeForN.push(i);
//     }
//     for (let i = 0; i < rangeForN.length; i++) {
//         const n = rangeForN[i];
//         const allCombo= helper(rangeForN,[k])
//         output.push(allCombo)
//     }
//     console.log("**rangeForN",rangeForN);
//     console.log("**output",output);
//     // const allCombo = helper(rangeForN,rangeForN);
//     // console.log("**allCombo",allCombo);
//     //  const filtered= allCombo.filter((arr)=> arr[0]!==arr[1])
//     // console.log("**filtered",filtered);
//     // //  const removedOrderPair = 
// };


var combine=(n,k)=>{
    const numberOfCombinationNeeded = k;
    const output=[];
    const rangeForN=[];  // [1,2,3,4]

        if (k==0) {
            return output;
        }

        // for (let i = 1; i <= n; i++) {
        //     rangeForN.push(i);
        // }

        while(n<=0){
            const currentNumber=n;
            
        }



}


console.log("**combine",combine(4,2));
console.log("**combine",combine(1,1));