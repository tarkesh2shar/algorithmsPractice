// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105


var threeSum = function (nums) {

    const sortedArr = nums.sort((a, b) => a - b);
    console.log("**sortedArr", sortedArr);

    let leftLeftPointer = 0;
    let rightpointer = sortedArr.length - 1;
    let leftPointer = 1;

    const tripletArr = []

    while (rightpointer >= 0) {

        const triplet1 = nums[leftLeftPointer];
        const triplet2 = nums[leftPointer];
        const triplet3 = nums[rightpointer];
        const tripletSum = triplet1 + triplet2 + triplet3;
        if (leftPointer === rightpointer) {
            leftLeftPointer += 1;
            leftPointer = leftLeftPointer + 1;

        } else {


            if (tripletSum === 0) {
                tripletArr.push([triplet1, triplet2, triplet3])
                leftPointer += 1;
                rightpointer -= 1;

            } else {
                if (tripletSum < 0) {
                    // leftLeftPointer+=1;
                    leftPointer += 1
                } else {
                    rightpointer -= 1;
                }
            }
        }
    }

    console.log("**tripletArr", tripletArr);



};

var threeSumImproved = function (nums) {

    const sortedArr = nums.sort((a, b) => a - b);
    console.log("**sortedArr",sortedArr);
    const tripletArr = []
    for (let leftLeftPointer = 0; leftLeftPointer < sortedArr.length - 2; leftLeftPointer++) {
        // if leftleftPointer is greator than 0;
        // Compare the leftleftPointer value if we have dealth with it before , if yes then skip loop;
        if (leftLeftPointer > 0 && sortedArr[leftLeftPointer] === sortedArr[leftLeftPointer - 1]) {
            continue;
        }
        let leftPointer = leftLeftPointer + 1;
        let rightPointer = sortedArr.length - 1;

        while (leftPointer < rightPointer) {
            const triplet1 = sortedArr[leftLeftPointer];
            const triplet2 = sortedArr[leftPointer];
            const triplet3 = sortedArr[rightPointer];
            const tripletSum = triplet1 + triplet2 + triplet3;
            if (tripletSum === 0) {
                tripletArr.push([triplet1, triplet2, triplet3])
                // Skip duplicates for leftPointer
                while (sortedArr[leftPointer] === sortedArr[leftPointer + 1]) {
                    leftPointer++;
                }
                // Skip duplicates for rightPointer
                while (sortedArr[rightPointer] === sortedArr[rightPointer - 1]) {
                    rightPointer--;
                }
                leftPointer += 1;
                rightPointer -= 1;
            } else {
                if (tripletSum < 0) {
                    // leftLeftPointer+=1;
                    leftPointer += 1
                } else {
                    rightPointer -= 1;
                }
            }

        }
    }
    
    console.log("**tripletArr", tripletArr);

}

threeSumImproved([-1, 0, 1, 2, -1, -4]);