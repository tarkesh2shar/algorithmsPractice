

// Topics
// Companies
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.



// Example 1:


// Input: head = [1,2,2,1]
// Output: true
// Example 2:


// Input: head = [1,2]
// Output: false


// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9


// Follow up: Could you do it in O(n) time and O(1) space?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
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


//easy way//
var isPalindromeNonEffiecient = function (head) {
    let string = "";
    while (head) {
        string += head.val;
        head = head.next;
    }
    return string === string.split("").reverse().join("");
};

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

//hard way//
var isPalindrome = function (head) {
    // first find middle pointer 
    let middle = middleNode(head);
    //reverse the second half of the list
    let secondHalf = reverseList(middle);
    // Step 3: Compare the first half with the reversed second half
    let firstHalf = head;
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true; // If all values matched, it's a palindrome
}


const list1 = new LinkedList();
list1.insertAtTail(1);
list1.insertAtTail(2);
list1.insertAtTail(2);
list1.insertAtTail(1);

// Test the function
console.log(isPalindrome(list1.head)); // Output: true


const list2 = new LinkedList();
list2.insertAtTail(1);
list2.insertAtTail(2);

// Test the function
console.log(isPalindrome(list2.head)); // Output: false



const list3 = new LinkedList();
list3.insertAtTail(1);

// Test the function
console.log(isPalindrome(list3.head)); // Output: true


const list4 = new LinkedList();
list4.insertAtTail(1);
list4.insertAtTail(2);
list4.insertAtTail(3);
list4.insertAtTail(2);
list4.insertAtTail(1);

// Test the function
console.log(isPalindrome(list4.head)); // Output: true


const list5 = new LinkedList();
list5.insertAtTail(9);
list5.insertAtTail(8);
list5.insertAtTail(8);
list5.insertAtTail(9);

// Test the function
console.log(isPalindrome(list5.head)); // Output: true


const list6 = new LinkedList();
list6.insertAtTail(1);
list6.insertAtTail(2);
list6.insertAtTail(3);
list6.insertAtTail(4);
list6.insertAtTail(5);

// Test the function
console.log(isPalindrome(list6.head)); // Output: false



