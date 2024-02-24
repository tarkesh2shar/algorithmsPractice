// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to simplify the code for handling the result linked list
    const dummy = new ListNode(0);
    let current = dummy; // Initialize a pointer to the current node in the result linked list
    let carry = 0;

    // Pointers to the heads of the input linked lists
    let head1 = l1;
    let head2 = l2;

    while (head1 || head2 || carry) {
        // Extract the values of the current nodes (default to 0 if the node is null)
        const value1 = head1 ? head1.val : 0;
        const value2 = head2 ? head2.val : 0;

        // Calculate the sum and carry for the current digit
        const sum = value1 + value2 + carry;
        carry = Math.floor(sum / 10); // Calculate the carry for the next iteration

        // Create a new node for the result and move the pointer to the next node
        current.next = new ListNode(sum % 10);
        current = current.next;

        // Move the pointers to the next nodes in the input linked lists if available
        if (head1) head1 = head1.next;
        if (head2) head2 = head2.next;
    }

    return dummy.next; // Skip the dummy node and return the actual head of the result linked list
};

// ListNode class definition (you may need to define this based on the platform's requirements)
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Test the function
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));


// var addTwoNumbers = function(l1, l2) {
//     let head1= l1;
//     let head2= l2;
//     while(head1.next && head2.next){
//         let value1 = head1.val;
//         let value2= head2.val;
//     }
// };


console.log("**addTwoNumbers",addTwoNumbers([2,4,3],[5,6,4]));
