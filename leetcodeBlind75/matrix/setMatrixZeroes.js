/**
 * 73. Set Matrix Zeroes
Medium

Topics
premium lock icon
Companies

Hint
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 */


function setZeroes(matrix) {
        const m = matrix.length;
    const n = matrix[0].length;

    const rows = new Array(m).fill(false);
    const cols = new Array(n).fill(false);

    // 1. First pass - find all zero positions
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = true;
                cols[j] = true;
            }
        }
    }
    console.log("Rows to be zeroed:",rows);
    console.log("Cols to be zeroed:",cols);
    

    // 2. Second pass - zero out marked rows
    for (let i = 0; i < m; i++) {
        if (rows[i]) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log("Matrix after zeroing rows:",matrix);

    // 3. Third pass - zero out marked columns
    for (let j = 0; j < n; j++) {
        if (cols[j]) {
            for (let i = 0; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log("Matrix after zeroing columns:",matrix);

}



console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])) // [[1,0,1],[0,0,0],[1,0,1]]
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])) // [[0,0,0,0],[0,4,5,0],[0,3,1,0]];

/**
 * 
 * constant Optimal Solution:
 * 
 * function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // 1. Check first row
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // 2. Check first column
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // 3. Use first row and column as markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // mark row
                matrix[0][j] = 0; // mark column
            }
        }
    }

    // 4. Zero inner cells based on markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // 5. Zero first row if needed
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // 6. Zero first column if needed
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}
 */