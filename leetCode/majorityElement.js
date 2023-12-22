// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?


var majorityElement = function(nums) {
    if(nums.length===1){
        return nums[0]
    }
    const mapHash={}
    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        if(!mapHash[number]){
            mapHash[number]=1;
        }else{
            mapHash[number]=mapHash[number]+1;
        }
    }
    console.log("**mapHash",mapHash);

    let highestNumber;
    let majorityNumber;
    
    for (const key in mapHash) {
      if(!highestNumber){
        highestNumber=mapHash[key];
        majorityNumber=key;
      }else if (highestNumber<mapHash[key]){
        majorityNumber = key;
        highestNumber=mapHash[key]
      }
    }

    return majorityNumber;

 
    console.log("**majorityNumber",majorityNumber);
};
// console.log("**majorityElement",majorityElement([2,2,1,1,1,2,2]))
// console.log("**majorityElement",majorityElement([1]))
// console.log("**majorityElement",majorityElement([2,2]))
console.log("**majorityElement",majorityElement([47,47,72,47,72,47,79,47,12,92,13,47,47,83,33,15,18,47,47,47,47,64,47,65,47,47,47,47,70,47,47,55,47,15,60,47,47,47,47,47,46,30,58,59,47,47,47,47,47,90,64,37,20,47,100,84,47,47,47,47,47,89,47,36,47,60,47,18,47,34,47,47,47,47,47,22,47,54,30,11,47,47,86,47,55,40,49,34,19,67,16,47,36,47,41,19,80,47,47,27]))

