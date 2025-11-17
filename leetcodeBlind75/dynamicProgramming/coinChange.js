// 🧩 Problem Statement

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.
// If that amount cannot be made up by any combination of the coins, return -1.



console.log("Coin Change Problem");


function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity); // [0, Infinity, Infinity, ...]
    dp[0] = 0;
    
    for (let coin of coins) { // For each coin
        for (let x = coin; x <= amount; x++) { // For each amount from coin to amount
            dp[x] = Math.min(dp[x], dp[x - coin] + 1); //mimum of current and last minimum + 1
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];


}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange1 = function(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1); // fill with large number
    dp[0] = 0; // base case

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

// Example test cases
console.log(coinChange1([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
console.log(coinChange1([2], 3));        // Output: -1
console.log(coinChange1([1], 0));        // Output: 0

console.log("Testing coinChange function:");


console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1], 1)); // 1
console.log(coinChange([1], 2)); // 2


console.log("from udemy");

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(0); //fill with 0

    for (let i = 1; i <= amount; i++) {
        let min = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j] && dp[i - coins[j]] !== -1) {    // i is current amount , dp[i - coins[j]] --> 2-1 the mimimum coins for remaining amount
                min = Math.min(min, dp[i - coins[j]]);
            }
        }
        dp[i] = (min === Number.MAX_SAFE_INTEGER) ? -1 : 1 + min;
    }

    return dp[amount];
};

// Example tests
console.log(coinChange([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
console.log(coinChange([2], 3));        // Output: -1
console.log(coinChange([1], 0));        // Output: 0