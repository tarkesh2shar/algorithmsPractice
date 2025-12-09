/**
 * Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Note that the product of an array with a single element is the value of that element.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    console.log("**nums",nums);
    //even though the question asks for +maximum multiplication , we need to take care of minimum value as , two -ve can become positive.

    let answer = nums[0];
    let maxProduct = nums[0]
    let minProduct = nums[0]

    for (let i = 1; i < nums.length; i++) {

        let x = nums[i];

        // store previous values before updating //not updating in one go , because maxProduct old value is required for min calculation
        let tempMax = Math.max(x, x * maxProduct, x * minProduct);
        let tempMin = Math.min(x, x * maxProduct, x * minProduct);

        maxProduct = tempMax;
        minProduct = tempMin;

        answer = Math.max(answer, maxProduct);
        
    }
    
    return answer;

};



function maxProductDp(nums){

    const dpMaxProduct=[];
    const dpMinProduct=[];

    dpMaxProduct[0]=nums[0];
    dpMinProduct[0]=nums[0];

    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        //including every number calcualate min and max up until that product

       let tempMax = Math.max(nums[i],dpMaxProduct[i-1] * nums[i],dpMinProduct[i-1]*nums[i]);
       let tempMin = Math.min(nums[i],dpMaxProduct[i-1] * nums[i],dpMinProduct[i-1]* nums[i]);

       dpMaxProduct[i] = tempMax;
       dpMinProduct[i] = tempMin;

       maxProduct = Math.max(maxProduct,dpMaxProduct[i]);

    }

    return maxProduct;

}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProductDp([2,3,-2,4]));
