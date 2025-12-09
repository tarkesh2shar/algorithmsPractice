/**
 * LeetCode: 121. Best Time to Buy and Sell Stock

You’re given an array prices[] where prices[i] = price of stock on day i.
You can do at most one transaction → buy once, sell once.
Return the maximum profit (or 0 if no profit is possible).

Example:
[7,1,5,3,6,4] → buy at 1, sell at 6 → profit = 5.

⸻

Intuition (very important)

Think like this:
	•	You walk from left to right through the array.
	•	You want to know:
	•	“What is the cheapest price I’ve seen so far?” → best day to buy.
	•	“If I sell today, what profit would I make compared to that cheapest price?”

So for every price:
	•	profitToday = price - minPriceSoFar
	•	Update maxProfit = max(maxProfit, profitToday)
	•	Also update minPriceSoFar = min(minPriceSoFar, price)

We never go back in time, so this respects the rule: buy before sell.

Time: O(n)
Space: O(1)
 */




/**
 * @param {number[]} prices
 * @return {number}
 */


var maxProfit = function(prices) {

    let maxProfitSoFar=0;
    let initialCurrentDayPrice= prices[0];

    for (let i = 1; i < prices.length; i++) {

        let futurePrice= prices[i];

        let maxProfit = futurePrice - initialCurrentDayPrice;

        maxProfitSoFar = Math.max(maxProfitSoFar,maxProfit);

        // update min price
        initialCurrentDayPrice = Math.min(initialCurrentDayPrice, futurePrice);
    }
    return maxProfitSoFar;
};



console.log(maxProfit([7,1,5,3,6,4])); //5 
