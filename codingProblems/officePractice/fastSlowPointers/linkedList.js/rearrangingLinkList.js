// Given the head of a Singly LinkedList, write a method to modify the LinkedList 
// such that the nodes from the second half of the LinkedList are inserted alternately
//  to the nodes from the first half in reverse order.
// So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

// Your algorithm should use only constant space the input LinkedList should be modified in-place.

// Example 1:

// Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
// Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 



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

// Create example linked lists
const list1 = new LinkedList();
[2, 4, 6, 8, 10, 12].forEach(val => list1.insertAtTail(val));


const list2 = new LinkedList();
[1, 2, 3, 4, 5, 6].forEach(val => list2.insertAtTail(val));



var middleNode = function (head) {
    let fastPointer = head;
    let slowPointer = head;
    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }
    return slowPointer;
};

function reverseList(head) {
    let prev = null;
    let current = head;

    // null,1,2

    // prev,current,current.next 

    while (current) {
        const next = current.next; // Save the next node
        current.next = prev;       // Reverse the current node's pointer
        // null,1,null
        prev = current;            // Move prev forward
        // 1,1,null
        current = next;            // Move current forward
        // 1,2,null
    }

    return prev; // New head of the reversed list
}

var reorderList = function (head) {
    if (!head || !head.next || !head.next.next) {
        return head; // No need to reorder if the list has fewer than 3 nodes
    }

    // Step 1: Find the middle of the list
    const middle = middleNode(head);

    // Step 2: Disconnect the first and second halves
    let secondHalf = middle.next;
    middle.next = null; // Break the link between the two halves

    // Step 3: Reverse the second half
    secondHalf = reverseList(secondHalf);

    // Step 4: Merge the two halves alternately
    let firstHalf = head;
    while (secondHalf) {
        const nextFirstHalf = firstHalf.next;
        const nextSecondHalf = secondHalf.next;

        firstHalf.next = secondHalf; // Link second half node
        secondHalf.next = nextFirstHalf; // Link first half node

        firstHalf = nextFirstHalf; // Move first half pointer
        secondHalf = nextSecondHalf; // Move second half pointer
    }

    return head; // The list is now reordered
};
//[2, 4, 6, 8, 10, 12]
console.log("Output:", reorderList(list1));
