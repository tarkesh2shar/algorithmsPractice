/**
 * Encode and Decode Strings

Problem Statement:

Design an algorithm to encode a list of strings into a single string.
The encoded string should be able to be decoded back into the original list of strings.

You need to implement two functions:

encode(strs): Encodes a list of strings to a single string.
decode(s): Decodes a single string back to the original list of strings.

Important Rules:
	•	Strings may contain any characters:
letters, digits, spaces, symbols like #, :, etc.
	•	The encoding must be unambiguous.
	•	After decoding, you must get exactly the same list of strings in the same order.

Example 1:

Input list:
[“lint”, “code”, “love”, “you”]

Encoded string (one valid way):
“4#lint4#code4#love3#you”

Decoded output:
[“lint”, “code”, “love”, “you”]

Example 2:

Input list:
[“ab#c”, “”, “xyz”]

Encoded string:
“4#ab#c0#3#xyz”

Decoded output:
[“ab#c”, “”, “xyz”]

Explanation:

Each string is encoded as:
length_of_string + “#” + string_content

While decoding:
	•	Read the number until “#”
	•	That number tells how many characters to read next
	•	Repeat until the full string is decoded

Constraints:
	•	The list can be empty
	•	Strings can be empty
	•	Strings can contain special characters
	•	The solution must work for all valid inputs
 */



    // Encode and Decode Strings

var encode = function(strs) {
    let res = "";
    for (const s of strs) {
        res += s.length + "#" + s;
    }
    return res;
};

var decode = function(s) {
    const res = [];
    let i = 0;

    while (i < s.length) {
        let j = i;

        // find the delimiter '#'
        while (s[j] !== '#') {
            j++;
        }

        // length of the string
        const len = parseInt(s.substring(i, j), 10);

        // move past '#'
        j++;

        // extract the string of length len
        res.push(s.substring(j, j + len));

        // move index to the next encoded part
        i = j + len;
    }

    return res;
};



const encoded = encode(["lint", "code", "love", "you"]);
console.log("Encoded:", encoded); // Encoded: 4#lint4#code4#love3#you

const decoded = decode(encoded);
console.log("Decoded:", decoded); // Decoded: [ 'lint', 'code', 'love', 'you' ]