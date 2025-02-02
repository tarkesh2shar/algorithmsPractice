// 141. Linked List Cycle
// Easy

// Topics
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.



// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:


// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:


// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.


// Follow up: Can you solve it using O(1) (i.e. constant) memory?



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(val) {
        const node = new Node(val);
        // if head is null , tails should also be null !
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            const currentHead = this.head;
            this.head = node;
            this.head.next = currentHead;
        }
    }
    insertAtTail(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }
    removeAtHead() {
        if (!this.head) {
            throw new Error("Empty Linked List");
        }
        const currentHead = this.head;
        this.head = this.head.next;

        // If the list becomes empty after removal, update the tail
        if (!this.head) {
            this.tail = null;
        }
        currentHead.next = null
        return currentHead.val;
    }
    removeAtTail() {
        if (!this.head) {
            throw new Error("Empty Linked List");
        }
        // Case 1: Single node in the list
        if (this.head === this.tail) {
            const value = this.tail.val;
            this.head = this.tail = null; // Empty the list
            return value; // Return the removed value
        }
        let currentNode = this.head;
        while (currentNode.next && currentNode.next !== this.tail) {
            currentNode = currentNode.next; //we find the node - just before tail node
        }
        // Store the value of the original tail
        const value = this.tail.val;
        // Update the tail to the second-to-last node
        this.tail = currentNode;
        this.tail.next = null; // Remove reference to the old tail
        return value; // Return the value of the removed tail
    }
    traverse() {
        const output = [];

        if (!this.head) {
            throw new Error("Empty Linked List");
        }
        let currentNode = this.head;

        while (currentNode) {
            output.push(currentNode.val); // Push the current node's value to the output array
            currentNode = currentNode.next; // Move to the next node
        }
        return output; // Return the array of values
    }

    search(val) {
        if (!this.head) {
            throw new Error("Empty Linked List");
        }
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.val === val) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    getAtIndex(index) {
        if (!this.head) {
            throw new Error("Empty Linked List");
        }

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            if (currentIndex === index) {
                return currentNode.val; // Return directly when the index is found
            }
            currentIndex++;
            currentNode = currentNode.next; // Move to the next node
        }

        // If the index is out of bounds
        throw new Error("Index out of bounds");
    }
    insertAtIndex(val, index) {
        const node = new Node(val);

        // Case 1: Insert at the head
        if (index === 0) {
            this.insertAtHead(val);
            return;
        }

        // Traverse the list to find the position before the target index
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode && currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        // If the index is out of bounds
        if (!currentNode) {
            throw new Error("Index out of bounds");
        }

        // Insert the new node
        node.next = currentNode.next;
        currentNode.next = node;

        // Update the tail if the node is inserted at the end
        if (!node.next) {
            this.tail = node;
        }
    }
    removeAtIndex(index) {
        if (!this.head) {
            throw new Error("Empty Linked List");
        }

        // Case 1: Remove from the head
        if (index === 0) {
            return this.removeAtHead(); // Reuse the removeAtHead method
        }

        let currentNode = this.head;
        let currentIndex = 0;

        // Traverse to the node just before the target index
        while (currentNode && currentIndex < index - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        // If the index is out of bounds or the next node is null
        if (!currentNode || !currentNode.next) {
            throw new Error("Index out of bounds");
        }

        // Case 2: Remove the node at the target index
        const removedValue = currentNode.next.val; // Get the value to return
        currentNode.next = currentNode.next.next; // Remove the target node

        // Case 3: Update the tail if the removed node was the tail
        if (!currentNode.next) {
            this.tail = currentNode; // Update the tail to the current node
        }

        return removedValue; // Return the value of the removed node
    }
    size() {
        let count = 0;
        let currentNode = this.head;

        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }
    isEmpty() {
        return this.head === null;
    }
}



var hasCycle = function (head) {

    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if (slowPointer === fastPointer) {
            return true;
        }
    }
    return false
};

const list1 = new LinkedList();
list1.insertAtTail(3);
list1.insertAtTail(2);
list1.insertAtTail(0);
list1.insertAtTail(-4);

// Create a cycle (tail connects to node at index 1)
list1.tail.next = list1.head.next;

console.log(hasCycle(list1.head)); // Output: true



const list2 = new LinkedList();
list2.insertAtTail(1);
list2.insertAtTail(2);

// Create a cycle (tail connects to head)
list2.tail.next = list2.head;

console.log(hasCycle(list2.head)); // Output: true


const list3 = new LinkedList();
list3.insertAtTail(1);
list3.insertAtTail(2);
list3.insertAtTail(3);

console.log(hasCycle(list3.head)); // Output: false


const list4 = new LinkedList();
list4.insertAtTail(1);

console.log(hasCycle(list4.head)); // Output: false


const list5 = new LinkedList();
list5.insertAtTail(1);

// Create a cycle (node points to itself)
list5.tail.next = list5.head;

console.log(hasCycle(list5.head)); // Output: true



const list6 = new LinkedList();

console.log(hasCycle(list6.head)); // Output: false

