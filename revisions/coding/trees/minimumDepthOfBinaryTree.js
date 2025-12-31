/**
 * 🧩 Minimum Depth of Binary Tree
📘 Problem Statement

Given the root of a binary tree, return its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note:
A leaf is a node with no children.

✨ Examples

Example 1

Input: root = [3,9,20,null,null,15,7]
Output: 2
Explanation: The shortest path is 3 → 9


Example 2

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5

🧠 Constraints
The number of nodes in the tree is in the range [0, 10^5].
-1000 <= Node.val <= 1000

🔍 Important Clarification (VERY IMPORTANT)

You cannot simply do:

Math.min(leftDepth, rightDepth) + 1


Why?

Because null children do NOT count as paths.

If one subtree is null, you must take the non-null side.

This is the main trap of this problem.
 */




function minDepth(root) {

    if (root === null) return 0;

    const left = minDepth(root.left);
    const right = minDepth(root.right);

    if (left === 0) return right + 1;
    if (right === 0) return left + 1;

    return Math.min(left, right) + 1;
}