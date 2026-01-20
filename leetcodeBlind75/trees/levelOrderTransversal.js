/**
 * 102. Binary Tree Level Order Traversal
Medium

Topics
premium lock icon
Companies

Hint
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
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


// function levelOrder(root) {
//     if (root === null) return [];

//     const results = [];
//     const queue = [root];
//     while (queue.length > 0) {
//         const node = queue.shift();

//         results.push(node.val);

//         const left = node.left;
//         const right = node.right;

//         if(left) queue.push(node.left);
//         if(right) queue.push(node.right);

//     }
//     return results;
// }


var levelOrder = function(root) {
    if (root === null) return [];

    const results = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length; //freeze current level size
        //we create a new array for each level
        const level = [];
 
        //what we actually want to put in the above level array (all the children?
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        //we push the level array to results
        results.push(level);
    }

    return results;
};



console.log("==== Example 1 ====");
console.log(levelOrder(buildTree([3,9,20,null,null,15,7]))); // [[3],[9,20],[15,7]]


