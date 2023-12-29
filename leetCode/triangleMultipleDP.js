// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10
 

// Constraints:

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
 

// Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?


let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];

var minimumTotal = function(triangle) {

    let minima=0;

    if(triangle){
        if(triangle.length==1){
            return triangle[0][0]
        }
        // else{
        //     let x=triangle[0][0];
        //     //combine with previous minima and return the lowest 
        //     for (let i = 1; i < triangle[0].length; i++) {
        //         let number=triangle[0][i];
        //         if(x+minima > number+minima){
        //             x=number;
        //         }
        //         // let number=triangle[0][i];
        //         // minimumSumMap[number] = minimumSum + triangle[0][i];

        //     }
        //     return x;
        // }
    }
     
    for (let i = triangle.length-1; i >0; i--) {
        const element = triangle[i];
        minima= minima+ minimumTotal([element]);
    }

    // if(triangle.length===1 && triangle[0].length==1){
    //     return triangle[0];
    // }

   

    return minima

        console.log("**minima",minima);

};


console.log("**minimumTotal",minimumTotal(triangle));
