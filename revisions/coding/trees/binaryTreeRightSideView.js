/**
 * Given the root of a binary tree,
return the values of the nodes you can see
when looking at the tree from the right side.

Input:
     1
    / \
    2  3
   / \   
  4  5   

Output:
[1, 3, 4]

Now the only new question is:
From each level, which node do we keep?


🔑 The actual rule (this is the final truth)

At each level, take the node that is farthest to the right —
not the right child, not the left child, but the last node in that level.

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






function rightSideView(root) {
    if (root === null) return [];

    const results =[];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let rightMost = null; // 👈 track last node of this level
        //we create a new array for each level
        const level = [];

        //hmm so what do we put in this array ? think think ? man i am so dumb 
        //maybe comment will help --> take the node that is farthest to the right — wtf does even it mean ! ? 


        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            rightMost = node; // 👈 update rightMost to current node
        


            // the following code will give us all the levels 

            // if (node.left) queue.push(node.left);
            // if (node.right) queue.push(node.right);  [ [ 1 ], [ 2, 3 ], [ 4, 5 ] ]

            //but what do we need ? only the right ? hmm
            // if (node.right) queue.push(node.right); //[ [ 1 ], [ 3 ] ]

            // so it turns out we can process both left and right  but only push the rightmost node value in level understand ?
             if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

           
        }

          level.push(rightMost.val); // 👈 push rightMost's value to level. //[ [ 1 ], [ 3 ], [ 5 ] ] the output is correct but we dont need array ,but its ok 

        results.push(level);

    }
    return results;
}







console.log(rightSideView(buildTree([1, 2, 3, 4, 5]))); // [1,3,5]
