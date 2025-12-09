/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    const map = new Map();


    for (const num of nums) {
        // console.log("**num",num);
        
          if(!map.has(num)){
            map.set(num,1);
        }else{
            map.set(num,map.get(num)+1);
        }
    }
    // console.log("**map",map);

    // for (let i = 0; i < nums.length; i++) {
    //     const element = nums[i];
    //     const hashVal= map.has(element);
    //     if(!hashVal){
    //         map.set(element,0);
    //     }else{
    //         map.set(element,hashVal+1);
    //     }

    //     if(map.get(element)>1){
    //         return false;
    //     }
        
        
    // }


    for (let i = 0; i < nums.length; i++) {
       
        if(map.get(nums[i])>1){
            return true;
        }

        
    }


    
    return false;
};

var containsDuplicateEfficient = function(nums) {
    const map = new Map();

    for (const num of nums) {
        if (map.has(num)) {
            return true;  // duplicate found
        }
        map.set(num, 1);
    }

    return false;
};



console.log(containsDuplicate([1,2,3,4]));
