// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105



var containsNearbyDuplicate = function(nums, k) {

    const hashMap={

    }
    for (let i = 0; i < nums.length; i++) {
        const number = String(nums[i])
        if(hashMap[number]!==undefined){
            let abs=Math.abs(hashMap[number]- i)
            if (abs<=k){
                return true;
            }
        }
        hashMap[`${number}`]=i
    }
    return false
    
};

console.log("**containsNearbyDuplicate",containsNearbyDuplicate([1,2,3,1],3));
console.log("**containsNearbyDuplicate",containsNearbyDuplicate([1,2,3,1,2,3],2));
console.log("**containsNearbyDuplicate",containsNearbyDuplicate([1,0,1,1],1));