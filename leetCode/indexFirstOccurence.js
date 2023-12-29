// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.



// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
// Accepted
// 2.2M
// Submissions
// 5.2M
// Acceptance Rate
// 41.2%
// Seen this question in a real interview before?
// 1/4



// var strStr = function (haystack, needle) {
//     let j = 0;
//     let startIndex = 0;
//     let i= 0;

//     while(i<haystack.length){
//         if(j===0){
//             startIndex = i;
//         }
//         if(haystack[i]===needle[j] && j<=i){
//             i++;
//             j++;

//         }else {
//             i++;
//             j=0;

//         }

//     }
//     return startIndex;
// };


var strStr=function(haystack,needle){
    let j = 0;
let startIndex = -1; // Initialize startIndex to -1

for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
        if (j === 0) {
            startIndex = i; // Update startIndex when the first character matches
        }
        j++;
        if (j === needle.length) {
            return startIndex; // Found the complete needle, return the startIndex
        }
    } else {
        if (startIndex !== -1) {
            i = startIndex; // Reset i to the startIndex if there was a partial match
        }
        j = 0;
        startIndex = -1; // Reset startIndex
    }
}

return -1; // Needle not found in haystack
}


// console.log("**haystack", strStr("sadbutsad", "sad"));
console.log("**haystack", strStr("leetcode", "leeto"));