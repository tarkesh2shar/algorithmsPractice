/**
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */




/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (const ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if (stack.length === 0) return false;

            const top = stack.pop();
            if (
                (ch === ')' && top !== '(') ||
                (ch === '}' && top !== '{') ||
                (ch === ']' && top !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};


var isValidd = function(s) {
    const stack = [];
    
    // closing -> opening mapping
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);

    for (const ch of s) {
        // if opening bracket
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } 
        // if closing bracket
        else {
            // no opening bracket to match
            if (stack.length === 0) return false;

            const top = stack.pop();
            // mismatch
            if (top !== map.get(ch)) return false;
        }
    }

    // all openings must be closed
    return stack.length === 0;
};



console.log(isValid("()[]{}"));
