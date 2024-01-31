// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

// () () () 



class Stack {
    constructor(){
        this.arr=[];
    }
    push(val){
        this.arr.push(val);
    }
    pop(){
        this.arr.pop();
    }
    getArr(){
        return this.arr;
    }
    getLast(){
        return this.arr[this.arr.length-1]
    }
}


var isValid = function(s) {
    const stack= new Stack();

   if(s.length===1)return false;

    // let lastItemPushed;
    for (const char of s) {
        if(char === "(" ||char === "{" || char === "[" ){
            stack.push(char);
            // lastItemPushed=char;
        }else{
            const recentItemInStack= stack.getLast();

            if(char===")"){
                if(recentItemInStack==="("){
                    stack.pop();
                }else{
                    return false;
                }

            }else if(char==="}"){
                if(recentItemInStack==="{"){
                    stack.pop();
                }else{
                    return false;
                }

            }else if(char==="]"){
                if(recentItemInStack==="["){
                    stack.pop();
                }else{
                    return false;
                }

            }
        }
    }
    return   stack.getArr().length ===0;

};

// var generateParenthesis = function(n) {

//     let inputs = "";
//     for (let i = 0; i < n; i++) {
//         // inputs.push("(");
//         // inputs.push(")")
//         inputs+="(";
//         inputs+=")"
//     }

//     const results= new Set();
//         const combine=(currentCombination,input)=>{

//             // console.log("**input",input);
//             // console.log("**currentCombination",currentCombination);
//             if(input.length===0){
//                 // const outputSoFar =[...currentCombination].join("");
//                 // outputSoFar.filter((sting)=>)

//                 const allCombination = currentCombination;
//                 const arrToString = allCombination.join("")
//                 const isOk = isValid(arrToString);

//                 if(isOk){
//                     results.add(arrToString);
//                 }
//                 // results.push([...currentCombination].join(""));
//                 return;
//             }
//             for (let i = 0; i < input.length; i++) {
//                     const parenth=input[i];
//                     //choose
//                     currentCombination.push(parenth);


//                     //explore 
//                     // let str = input.split('')
//                     //     str.splice(i,1)
//                     //     str = str.join('')

//                         let str = input.slice(0, i) + input.slice(i + 1);

//                     combine(currentCombination,str);
//                     currentCombination.pop();


//             }


//          }
//         combine([],inputs)

//     const finalResult =[];

//      results.forEach((val)=>finalResult.push(val));
//      return finalResult
// };

// var generateParenthesis = function(n) {
//     const result = [];
    
//     function backtrack(s = '', open = 0, close = 0) {
//         // If we have used all parentheses, add the result
//         if (s.length === 2 * n) {
//             result.push(s);
//             return;
//         }
        
//         // If we can add an open parenthesis, add it and call backtrack again
//         if (open < n) {
//             backtrack(s + '(', open + 1, close);
//         }
        
//         // If we can add a closed parenthesis, add it and call backtrack again
//         if (close < open) {
//             backtrack(s + ')', open, close + 1);
//         }
//     }
    
//     // Kick off the recursive backtracking function from an empty string
//     backtrack();
//     return result;
// };


var generateParenthesis = function (n) {
    const results = [];

    const backtrack = (currentCombination, openCount, closeCount) => {
        if (currentCombination.length === 2 * n) {
            const arrToString = currentCombination.join("");
            // if (isValid(arrToString)) {
                results.push(arrToString);
            // }
            return;
        }

        if (openCount < n) {
            currentCombination.push("(");
            backtrack(currentCombination, openCount + 1, closeCount);
            currentCombination.pop();
        }

        if (closeCount < openCount) {
            currentCombination.push(")");
            backtrack(currentCombination, openCount, closeCount + 1);
            currentCombination.pop();
        }
    };

    backtrack([], 0, 0);

    return results;
};





console.log("**generateParenthesis",generateParenthesis(8));
console.log("**generateParenthesis",generateParenthesis(3));
console.log("**generateParenthesis",generateParenthesis(1));
console.log("**generateParenthesis",generateParenthesis(3));
console.log("**generateParenthesis",generateParenthesis(3));