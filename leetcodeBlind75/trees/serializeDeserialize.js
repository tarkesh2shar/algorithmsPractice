/***
 * 
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

Example 1:


Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
Example 2:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-1000 <= Node.val <= 1000
 */


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// ========== Helper: Build Tree from Array ==========
function buildTree(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length && i < arr.length) {
        const node = queue.shift();

        // console.log("Queue Length:", queue.length);
        

        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        // console.log("Queue after adding left", queue.length);
        
        i++;

        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        // console.log("Queue after adding right", queue.length);
        i++;

        // console.log(
        //     `Processed node with value ${node.val}, next index is ${i}`
        // );
        // console.log("------------------------------");
        
        

    }
    return root;
}




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

    const queue = [root];
    const result= [];

    while(queue.length){
        let node = queue.shift();
        // console.log(node.val);
        
      
        if(node === null){
             result.push("#");
        }
        else{

                result.push(node.val);
                queue.push(node.left)
                queue.push(node.right)
        }

     

        // result.push(node.val);
        // result.push(node.val);
    }
    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    if (!data || data.length === 0) return null;

    const values = data.split(",");
    if (values[0] === "#") return null;

    const root = new TreeNode(parseInt(values[0], 10));
    const queue = [root];
    let i = 1;

    while (queue.length && i < values.length) {
        const node = queue.shift();

        // LEFT CHILD
        if (values[i] !== "#" && values[i] !== undefined) {
            node.left = new TreeNode(parseInt(values[i], 10));
            queue.push(node.left);
        }
        i++;

        // RIGHT CHILD
        if (i < values.length && values[i] !== "#" && values[i] !== undefined) {
            node.right = new TreeNode(parseInt(values[i], 10));
            queue.push(node.right);
        }
        i++;
    }

    return root;


};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

console.log("Example 1:");
console.log(serialize(buildTree([1,2,3,null,null,4,5]))); // "[1,2,3,null,null,4,5]"

console.log(deserialize("1,2,3,#,#,4,5,#,#,#,#")); // TreeNode structure


console.log("------------------");



var serializePreOrder = function(root) {
    // first root , then left , then right <-- rule
    const results = [];

    var dfs = function(root){
        if(root === null){
          return  results.push("#");
        }
        results.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    dfs(root);


    return results.join(",");

}

var deserilazePreOrder = function(data) {
    if (!data || data.length === 0) return null;
    let values = data.split(",");
    let index = 0;

    var dfs = function(){
        // read current value
        const val = values[index];
        index = index + 1;  // move to next position
        if(val === "#"){
            return null;
        }
        const node = new TreeNode(parseInt(val,10));
        node.left = dfs();
        node.right = dfs();
        return node;

    }


 
   return dfs();
    
    

}



console.log("Example 2:");
console.log("Serilaigedfs",serializePreOrder(buildTree([1,2,3,null,null,4,5]))); "1,2,#,#,3,4,#,#,5,#,#"
console.log("Deserializedfs",deserilazePreOrder("1,2,#,#,3,4,#,#,5,#,#")); // TreeNode structure