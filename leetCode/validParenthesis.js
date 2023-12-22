// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


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

console.log("**isValid",isValid("()"));
console.log("**isValid",isValid("()[]{}"));
console.log("**isValid",isValid("(]"));
console.log("**isValid",isValid("]"));
console.log("**isValid",isValid("["));
console.log("**isValid",isValid(")(){}"));