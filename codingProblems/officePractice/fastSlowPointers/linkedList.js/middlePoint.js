// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.



// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:


// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.


// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
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




var middleNode = function (head) {
    let fastPointer = head;
    let slowPointer = head;
    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    return slowPointer;
};



const list1 = new LinkedList();
list1.insertAtTail(1);
list1.insertAtTail(2);
list1.insertAtTail(3);
list1.insertAtTail(4);
list1.insertAtTail(5);

console.log(middleNode(list1.head)); // Expected Output: Node with value 3 (middle node)



const list2 = new LinkedList();
list2.insertAtTail(1);
list2.insertAtTail(2);
list2.insertAtTail(3);
list2.insertAtTail(4);
list2.insertAtTail(5);
list2.insertAtTail(6);

console.log(middleNode(list2.head)); // Expected Output: Node with value 4 (second middle node)




const list3 = new LinkedList();
list3.insertAtTail(1);

console.log(middleNode(list3.head)); // Expected Output: Node with value 1 (only node)




const list4 = new LinkedList();
list4.insertAtTail(1);
list4.insertAtTail(2);

console.log(middleNode(list4.head)); // Expected Output: Node with value 2 (second middle node)




const list5 = new LinkedList();

console.log(middleNode(list5.head)); // Expected Output: null or undefined (no nodes)