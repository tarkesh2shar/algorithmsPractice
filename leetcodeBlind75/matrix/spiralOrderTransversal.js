/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
 */

function spiralOrder(matrix) {
  const result = [];
    if (matrix.length === 0 || matrix[0].length === 0) return result;

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;


    while (top <= bottom && left <= right) {
            // 1) traverse from left -> right on the top row
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }
        top++; // we've used this row

        console.log("After top row traversal:",result);
        

               // 2) traverse from top -> bottom on the right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--; // we've used this column


        console.log("After right column traversal:",result);

         // 3) traverse from right -> left on the bottom row (if still valid)
        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
            bottom--; // used this row
        }
        console.log("After bottom row traversal:",result);

        // 4) traverse from bottom -> top on the left column (if still valid)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++; // used this column
        }
        console.log("After left column traversal:",result);
    }

    return result;
}


console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])) //` [1,2,3,4,8,12,11,10,9,5,6,7]


