// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

 

// Example 1:


// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:


// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:



// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]
 

// Constraints:

// 0 <= n <= 1000
// -104 <= Node.val <= 104
// Node.random is null or is pointing to some node in the linked list.



class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.random = null;
    }
}


var copyRandomListShallow = function(head) {

    // shallow copy //
    const temp = new Node(0);
    let current=temp;

    while(head!==null){
        current.next=head;
        current.random=head;
        current = current.next;

        head=head.next;
    }
    return temp.next
};



var copyRandomList = function(head) {
    if (!head) {
        return null;
    }

    // Step 1: Create a new node for each original node and insert it between the original nodes.
    let current = head;
    while (current) {
        const newNode = new Node(current.val);
        newNode.next = current.next; // copy next value of newNode to next value of currentNode
        current.next = newNode; // attach a new node to current node 
        current = newNode.next; //traverse further 
    }

    // after above scenerio 
    //  Original List: A -> B -> C -> D
    //  Modified List: A -> A' -> B -> B' -> C -> C' -> D -> D'

    // Step 2: Assign random pointers for the new nodes.
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next; //Because we have inserted in between
        }
        current = current.next.next;
    }

    // Step 3: Separate the original list and the copied list.
    const newHead = head.next; // second node will give A';
    current = head;
    while (current) {
        const temp = current.next;
        current.next = temp.next;
        current = current.next;
        if (current) {
            temp.next = current.next;
        }
    }

    return newHead;
};

// Example usage:
const originalList = new Node(7);
originalList.next = new Node(13);
originalList.next.next = new Node(11);
originalList.next.next.next = new Node(10);
originalList.next.next.next.next = new Node(1);

originalList.random = null;
originalList.next.random = originalList;
originalList.next.next.random = originalList.next.next.next.next;
originalList.next.next.next.random = originalList.next.next;
originalList.next.next.next.next.random = originalList;

const copiedList = copyRandomList(originalList);
console.log("Original List:", originalList);
console.log("Copied List:", copiedList);



console.log("**copyRandomList",copyRandomList([[7,null],[13,0],[11,4],[10,2],[1,0]]));
console.log("**copyRandomList",copyRandomList([[1,1],[2,1]]));
console.log("**copyRandomList",copyRandomList([[3,null],[3,0],[3,null]]));