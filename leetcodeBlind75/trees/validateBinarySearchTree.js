/**
 * 98. Validate Binary Search Tree
Medium

Topics
premium lock icon
Companies
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys strictly less than the node's key.
The right subtree of a node contains only nodes with keys strictly greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
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


var isValidBST = function(root) {

      function dfs(node, min, max) {
        console.log("Visiting Node:", node ? node.val : null, "Min:", min, "Max:", max);
        
        if (!node) return true;

        if(node.val >= max || node.val <= min ) {
            console.log("BST Violation at Node:", node.val, "Min:", min, "Max:", max);
            return false;
        }

        return dfs(node.left, min, node.val) &&
               dfs(node.right, node.val, max);
    }

    return dfs(root, -Infinity, Infinity);
};


/**
 * wrong approach only checks immediate children
 * var isValidBST = function(root) {

    function dfs(node,min,max){
           if(!node){
            return true;
        }
        let val = node.val;
        let leftNode = node.left;
        let rightNode = node.right;

     
        if(leftNode){
            if(leftNode.val >= val){
                return false;
            }
        }
        if(rightNode){
            if(rightNode.val <= val){
                return false;
            }
        }
        return dfs(leftNode) && dfs(rightNode);
    }

    return dfs(root-Infinity, Infinity);
};

 */




console.log("isValidBST:", isValidBST(buildTree([2, 1, 3]))); // true
console.log(
    "isValidBST:",
    isValidBST(buildTree([5, 1, 4, null, null, 3, 6]))
); // false
