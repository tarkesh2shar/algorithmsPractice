// Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.

// You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.

// Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

// Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.

// The answer is guaranteed to fit in a 32-bit signed integer.

 

// Example 1:

// Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// Output: 4
// Explanation: Since your initial capital is 0, you can only start the project indexed 0.
// After finishing it you will obtain profit 1 and your capital becomes 1.
// With capital 1, you can either start the project indexed 1 or the project indexed 2.
// Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
// Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
// Example 2:

// Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// Output: 6
 

// Constraints:

// 1 <= k <= 105
// 0 <= w <= 109
// n == profits.length
// n == capital.length
// 1 <= n <= 105
// 0 <= profits[i] <= 104
// 0 <= capital[i] <= 109

// const helpMePlease = (w,profits,capital)=>{
//     const helperObj={
//     }
//     for (let i = 0; i < profits.length; i++) {
//         const profitForAParticularProject = profits[i];
//         const capitalForAParticularProject= capital[i];
//         if (!(capitalForAParticularProject > w)) {
//             if(helperObj["profit"]){
//                 if(helperObj.profit <= profitForAParticularProject){
//                     helperObj["index"]=i;
//                     helperObj["profit"]= profitForAParticularProject;
//                 }
//             }else{
//                 helperObj["index"]=i;
//                 helperObj["profit"]= profitForAParticularProject;
//             }
//         }
//     }
//     return helperObj;
// }

// var findMaximizedCapital = function(k, w, profits, capital) {
//     // need to maximize w 
//     // max k project need to be taken 
//     // profit -->  array of profit that we get from each project []
//     // capital --> capital required to generate profit []
//     let initialCapital= w;
//     let projectAdded=0;
//     while(projectAdded<k && profits.length > 0){
//         let helper = helpMePlease(initialCapital,profits,capital);
//         if (helper.profit) {
//             initialCapital+=helper.profit;
//             profits.splice(helper.index,1)
//             capital.splice(helper.index,1)
//         }
//         projectAdded+=1;
//     }
//     return initialCapital;
// };



/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */


 class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const root = this.heap[0];
        const last = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[parentIndex].profit >= this.heap[currentIndex].profit) {
                break;
            }

            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let maxChildIndex = currentIndex;

            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex].profit > this.heap[maxChildIndex].profit
            ) {
                maxChildIndex = leftChildIndex;
            }

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex].profit > this.heap[maxChildIndex].profit
            ) {
                maxChildIndex = rightChildIndex;
            }

            if (maxChildIndex === currentIndex) {
                break;
            }

            this.swap(currentIndex, maxChildIndex);
            currentIndex = maxChildIndex;
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}
var findMaximizedCapital = function(k, w, profits, capital) {
   const projects = [];
    const n = profits.length;

    for (let i = 0; i < n; i++) {
        projects.push({ profit: profits[i], capital: capital[i] });
    }

    projects.sort((a, b) => a.capital - b.capital);

    const maxHeap = new MaxHeap();

    let currentIndex = 0;

    for (let i = 0; i < k; i++) {
        while (currentIndex < n && projects[currentIndex].capital <= w) {
            maxHeap.push(projects[currentIndex]);
            currentIndex++;
        }

        if (!maxHeap.isEmpty()) {
            w += maxHeap.pop().profit;
        } else {
            break;
        }
    }

    return w;
};




console.log("**findMaximizedCapital",findMaximizedCapital(2,0,[1,2,3],[0,1,1]));
console.log("**findMaximizedCapital",findMaximizedCapital(3,0,[1,2,3],[0,1,2]));


