// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:
    // Input: nums = [1,3,5,6], target = 5
    // Output: 2
    // Example 2:

    // Input: nums = [1,3,5,6], target = 2
    // Output: 1
    // Example 3:

    // Input: nums = [1,3,5,6], target = 7
    // Output: 4

var searchInsert = function(nums, target) {
    let startIndex=0;
    let endIndex= nums.length-1;

    console.log("**nums",nums);
  
    // console.log("**middleIndex",middleIndex); 

    // if(nums[middleIndex]===target){
    //     return middleIndex;
    // }

    // let leftSubArr=nums.slice(startIndex,middleIndex+1);
    // let rightSubArr= nums.slice(middleIndex,endIndex);

    // console.log("**leftSubArr",leftSubArr);
    // console.log("**rightSubArr",rightSubArr);

    while(startIndex<=endIndex){
        let middleIndex=startIndex+ Math.floor((endIndex-startIndex)/2);
        if(nums[middleIndex]===target){
            return middleIndex
        }
        if(nums[middleIndex]<target){
            startIndex=middleIndex+1;
        }
        else{
            endIndex=middleIndex-1;
        }
    }

    return startIndex;

    


};

console.log("**searchInsert",searchInsert([1,3,5,6],5));
console.log("**searchInsert",searchInsert([1,3,5,6],2));
console.log("**searchInsert",searchInsert([1,3,5,6],7));