// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

var searchMatrix = function(matrix, target) {
    let probaleRowThatContainsTarget;
    let isElementPresentInMatrix=false;
    console.log("**matrix",matrix ,"target" ,target);
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        // console.log("**row",row);
        const firstElementOfRow= row[0];
        if(firstElementOfRow<=target){
            probaleRowThatContainsTarget =row;
        }
    }
    console.log("**probaleRowThatContainsTarget",probaleRowThatContainsTarget);

    if(!probaleRowThatContainsTarget){
        return false;
    }
   // Binary Search Logic Here 

   let startIndex=0;
   let endIndex= probaleRowThatContainsTarget.length-1;
  

   while(startIndex<=endIndex){
    let midPointIndex=startIndex+ Math.floor((endIndex-startIndex)/2);
        if(probaleRowThatContainsTarget[midPointIndex]===target){
            return true;
        }
        if(probaleRowThatContainsTarget[midPointIndex]<target){
            startIndex= midPointIndex+1
        }else{
            endIndex=midPointIndex-1;
        }
   }
   


    return isElementPresentInMatrix;
};


// var searchMatrix = function(matrix, target) {
//     const m = matrix.length;
//     const n = matrix[0].length;

//     let low = 0;
//     let high = m * n - 1;

//     while (low <= high) {
//         const mid = Math.floor((low + high) / 2);
//         const midElement = matrix[Math.floor(mid / n)][mid % n];

//         if (midElement === target) {
//             return true;
//         } else if (midElement < target) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return false;
// };


// console.log("**searchMatrix",searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));
// console.log("**searchMatrix",searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],13));
console.log("**searchMatrix",searchMatrix([[1]],1));