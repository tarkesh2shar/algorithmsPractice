/**
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

Example 1:


Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
Example 2:


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

Constraints:

The number of nodes in the tree is in the range [1, 3 * 104].
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



function maxPathSum(root) {

    let maxSum = -Infinity;

    function dfs(node) {
        if (node === null) return 0;

        let maxLeft = 0;
        let maxRight = 0;

        if (node.left !== null) {
            maxLeft = Math.max(0, dfs(node.left));
        }
        if (node.right !== null) {
            maxRight = Math.max(0, dfs(node.right));
        }

        // ❌ PROBLEM 1: currentSum is ONLY the best SINGLE downward chain.
        // It is: node.val + ONE side (left OR right)
        // But the maximum path sum problem requires BOTH sides sometimes:
        // e.g. left -> node -> right
        //
        // So here you're ignoring the possibility of  left + node + right.
        let currentSum = node.val + Math.max(maxLeft, maxRight);

        // ❌ PROBLEM 2: You're updating maxSum with ONLY the chain.
        // But the true maximum could be a "peak" path using BOTH children.
        //
        // This line will NEVER consider: node.val + maxLeft + maxRight.
        //
        // So for a tree like:
        //      1
        //     / \
        //    2   3
        //
        // Correct answer = 2 + 1 + 3 = 6
        // Your code will compute:
        // currentSum at root = 1 + max(2,3) = 4
        // maxSum = 4  (WRONG)
        // maxSum = Math.max(maxSum, currentSum);

        // ❌ PROBLEM 3: You return currentSum, which is only a chain.
        //
        // Returning a chain is correct for the PARENT — but since you never computed
        // the “full path through node”, the global max is never updated properly.
        // return currentSum;


        // ✅ FIX STARTS HERE ✅

        // ⭐ 1) Compute the FULL path that uses this node as the highest point.
        // This is where BOTH sides can contribute:
        // left-chain + node.val + right-chain
        const priceNewPath = node.val + maxLeft + maxRight;

        // ⭐ 2) Update global max with this full "peak" path.
        // This is the candidate for the final answer.
        maxSum = Math.max(maxSum, priceNewPath);

        // ⭐ 3) Return ONLY a single chain to the parent:
        // node.val + max(one side)
        //
        // Because the parent cannot take both sides at once without breaking
        // the "no up-then-down" rule. It can only extend one downward path.

        /**
         * Imagine you’re climbing a mountain.
                •	The peak is the full path:
            left slope → top → right slope
                •	The return value is only one slope:
            because you can only continue climbing one direction.
         */
        return node.val + Math.max(maxLeft, maxRight);


    //     So:
	// •	For global answer → we consider both sides (a “peak”).
	// •	For recursion return → we only pass one side up (a chain).
    }

    dfs(root);
    return maxSum;
}



function maxPathSumWorking(root) {
    let maxSum = -Infinity;

    function dfs(node) {
       // if the node itself is null;
        if (node === null) return 0;
            // if the node is a leaf //
        if(!node.left  && !node.right) {
            return node.val;
        }
         // if node is not a leaf , that means it has at least one child 


        // best downward path from left/right (ignore negatives)
        let maxLeft = Math.max(0, dfs(node.left));
        let maxRight = Math.max(0, dfs(node.right));

         // best path USING this node as the highest point
        const priceNewPath = node.val + maxLeft + maxRight;

      // update global max with this path
        maxSum = Math.max(maxSum, priceNewPath);

        // return best single-branch path to parent
        return node.val + Math.max(maxLeft, maxRight);

    }
    dfs(root);
    return   maxSum;

}





// console.log(maxPathSum(buildTree([1,2,3]))); // 6
// console.log(maxPathSum(buildTree([-10,9,20,null,null,15,7]))); // 42
console.log(maxPathSumWorking(buildTree([-10,9,20,null,null,15,7]))); // 42
