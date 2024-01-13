// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109


// var longestConsecutive = function(nums) {
    
//     if(nums.length===0){
//         return 0
//     }

//     let longestSubSequence=1;
//     let currentSequence=1;

//     const sortedArr= nums.sort((a,b)=>a-b);

//     console.log("**sortedArr",sortedArr);
//     for (let i = 0; i < sortedArr.length; i++) {
//         const number = sortedArr[i];
//         const nextNumber=sortedArr[i+1];
//         if(number===nextNumber){
//             continue; 
//         }
//         if(number+1===nextNumber){
//             currentSequence+=1;
//         }else{
//             longestSubSequence = Math.max(longestSubSequence, currentSequence);
//             currentSequence=1;
//         }
//         console.log("**number",number);
//     }

//     console.log("**longestSubSequence",longestSubSequence);
//     return longestSubSequence;
    
// };


// var longestConsecutive = function(nums) {
//     if(nums.length === 0) return 0;

//     let currentSequence = 1;
//     let longestSequence = 0;
    
//     const sortedArr= nums.sort((a,b)=>a-b);

//     for (let i = 1; i < sortedArr.length; i++) {
//         if(sortedArr[i] != sortedArr[i-1]){
//             if(sortedArr[i] == sortedArr[i-1] + 1){
//                 currentSequence++;
//             } else {
//                 longestSequence = Math.max(longestSequence, currentSequence);
//                 currentSequence=1;
//             }
//         }
//     }
//     return Math.max(longestSequence, currentSequence);
// };

var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;

    let longestSequence = 1;
    let currentSequence = 1;

    const sortedArr = [...new Set(nums)].sort((a,b) => a - b);
    
    for(let i = 1; i < sortedArr.length; i++){
        if(sortedArr[i] === sortedArr[i-1]+1) {
            currentSequence += 1;
            longestSequence = Math.max(longestSequence, currentSequence);
        } else {
            currentSequence = 1;
        }
    }
    
    return longestSequence;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));

