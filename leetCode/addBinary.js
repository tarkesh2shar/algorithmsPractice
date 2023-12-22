// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

function textToBin(text) {
    return (
      Array
        .from(text)
        .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
        .map(bin => '0'.repeat(8 - bin.length) + bin )
        .join(' ')
    );
}



// var addBinary = function(a, b) {
//  const firstNumber= parseInt(a,2)
//  const secondNumber= parseInt(b,2)
//  return ((firstNumber+secondNumber)>>0).toString(2)
// };

var addBinary = function(a,b){
  let carry = 0, result = "";
  let i = a.length - 1, j = b.length - 1;

  while(i >= 0 || j >= 0) {
    let num1 = i < 0 ? 0 : a[i] | 0;
    let num2 = j < 0 ? 0 : b[j] | 0;
    carry = carry + num1 + num2;
    result = carry % 2 + result; //concat string in proper order
    carry = carry / 2 | 0;
    i--;
    j--;
  }

  return carry ? carry + result : result;

}




console.log("addBinary",addBinary("11","1"));
// console.log("parseInt",parseInt("1",2));
// console.log("xxx",(4 >>> 0).toString(2))