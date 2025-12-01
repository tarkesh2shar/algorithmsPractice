/**
 * Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 */



function invertTree(root) {
    if (root === null) return null;

    // Swap the left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
}


function invertTreeBFS(root) {
    if(root === null) return null;

    const queue = [root];


    while(queue.length > 0) {
        const current = queue.shift(); 
        let temp = current.left;
        current.left = current.right;
        current.right = temp;

      if (current.left) queue.push(current.left);
     if (current.right) queue.push(current.right);
    }

    return root;
}
