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


function threeSumSolved(nums) {
    const resultArray = [];
    const sortedArray = nums.sort((a, b) => a - b); // Sort the array to enable two-pointer approach

    let startPointerIndex = 0;

    while (startPointerIndex < sortedArray.length - 2) {
        let middlePointer = startPointerIndex + 1;
        let endPointerIndex = sortedArray.length - 1;

        while (middlePointer < endPointerIndex) {
            const sum = sortedArray[startPointerIndex] + sortedArray[middlePointer] + sortedArray[endPointerIndex];

            if (sum === 0) {
                // Add the triplet to the result
                resultArray.push([sortedArray[startPointerIndex], sortedArray[middlePointer], sortedArray[endPointerIndex]]);

                // Move pointers and skip duplicates
                while (middlePointer < endPointerIndex && sortedArray[middlePointer] === sortedArray[middlePointer + 1]) {
                    middlePointer++;
                }
                while (middlePointer < endPointerIndex && sortedArray[endPointerIndex] === sortedArray[endPointerIndex - 1]) {
                    endPointerIndex--;
                }

                middlePointer++;
                endPointerIndex--;
            } else if (sum < 0) {
                middlePointer++; // Increase the sum
            } else {
                endPointerIndex--; // Decrease the sum
            }
        }

        // Skip duplicates for startPointerIndex
        do {
            startPointerIndex++;
        } while (startPointerIndex < sortedArray.length - 2 && sortedArray[startPointerIndex] === sortedArray[startPointerIndex - 1]);
    }

    return resultArray;
}

function threeSum(nums) {
    const resultArray = [];
    const sortedArray = nums.sort((a, b) => a - b); // Sort the array to enable two-pointer approach}

    for (let firstPointerIndex = 0; firstPointerIndex < sortedArray.length - 2; firstPointerIndex++) {

        if (firstPointerIndex > 0 && sortedArray[firstPointerIndex] === sortedArray[firstPointerIndex - 1]) {
            continue;
        }

        let middlePointer = firstPointerIndex + 1;
        let endPointerIndex = sortedArray.length - 1;

        while (middlePointer < endPointerIndex) {
            const sum = sortedArray[firstPointerIndex] + sortedArray[middlePointer] + sortedArray[endPointerIndex];

            if (sum === 0) {
                // Add the triplet to the result
                resultArray.push([sortedArray[firstPointerIndex], sortedArray[middlePointer], sortedArray[endPointerIndex]]);

                // Move pointers and skip duplicates
                while (middlePointer < endPointerIndex && sortedArray[middlePointer] === sortedArray[middlePointer + 1]) {
                    middlePointer++;
                }
                while (middlePointer < endPointerIndex && sortedArray[endPointerIndex] === sortedArray[endPointerIndex - 1]) {
                    endPointerIndex--;
                }

                middlePointer++;
                endPointerIndex--;


            } else if (sum < 0) {
                middlePointer++; // Increase the sum
            } else {
                endPointerIndex--; // Decrease the sum
            }
        }
    }
}


console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));



