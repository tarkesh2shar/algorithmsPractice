/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
 */



function rotate(matrix) {
    const n = matrix.length;
    // calcululate the transpose of the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // store matrix[i][j] temporarily
            let temp = matrix[i][j];
            // move matrix[j][i] into matrix[i][j]
            matrix[i][j] = matrix[j][i];
            // put temp into matrix[j][i]
            matrix[j][i] = temp;
            // swap matrix[i][j] and matrix[j][i]
            // [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // now reverse each row

    for (let i = 0; i < n; i++) {
        let left = 0;
        let right = n - 1;

        while (left < right) {
            // swap matrix[i][left] and matrix[i][right]
            let temp = matrix[i][left];
            matrix[i][left] = matrix[i][right];
            matrix[i][right] = temp;
            left++;
            right--;
        }
    }

      console.log("matrix after transpose:",matrix);
    return matrix;



  
    
};




console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])) // [[7,4,1],[8,5,2],[9,6,3]];
