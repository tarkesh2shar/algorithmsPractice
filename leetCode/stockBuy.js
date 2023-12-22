// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// var maxProfit = function(prices) {
//     let lowestPrice=prices[0];
//     let lowestPriceIndex=0;
//     let highestPrice= 0;
//     let highestPriceIndex=0;
//     for (let i = 1; i < prices.length; i++) {
//         const price = prices[i];
//         if(price<lowestPrice){
//             lowestPrice=price;
//             lowestPriceIndex=i;
//         } 
//     }
//     for (let i = lowestPriceIndex; i < prices.length; i++) {
//         const price = prices[i];
//         if(price>highestPrice){
//             highestPrice =price;
//             highestPriceIndex=i;
//         }
        
//     }
//     console.log("**lowestPrice",lowestPrice);
//     console.log("**lowestPriceIndex",lowestPriceIndex);

//     console.log("**highestPrice",highestPrice);
//     console.log("**highestPriceIndex",highestPriceIndex);

//     if(lowestPriceIndex=== prices.length-1){
//         return 0;
//     }
//     return highestPrice-lowestPrice;
// };

// var maxProfit = function(prices) {
//     let difference = 0;

//   for (let i = 0; i < prices.length; i++) {

//    for (let j = i+1; j < prices.length; j++) {
    
//        const firstPrice = prices[i];
//        const secondPrice= prices[j];
//        const currdifference = firstPrice-secondPrice;
//        if(currdifference<difference){
//           difference=currdifference;
//        }
//    }
//   }
//   return Math.abs(difference);
// }; Time -- O(n2);

// var maxProfit = function(prices) {
//     let highestPrice=0;
//     let highestPriceIndex=0;
//     let lowestPrice=prices[prices.length-1];
//     let lowestPriceIndex=0;

//    for (let i = 0; i < prices.length; i++) {
//          const price = prices[i];
//             if(price>highestPrice){
//                 highestPrice=price;
//                 highestPriceIndex=i;
//             } 
//    }

//    for (let index = prices.length-1; index < prices.length; index--) {
//         const price=prices[index];
//         if(index===highestPriceIndex){
//             break;
//         }else{
//             if(price> lowestPrice){
//                 lowestPrice=price;
//             }
//         }

//    }
//    console.log("**lowestPrice",lowestPrice);
// //    return Math.abs(difference);

//    return highestPrice-lowestPrice;

// };


var maxProfit = function(prices) {
    let profit=0;
    let buyPrice=prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        const sellPrice = prices[i];
        if(sellPrice>buyPrice){
             profit =  Math.max(profit,sellPrice-buyPrice);
        }
        else{
            buyPrice=sellPrice;
        }
    }

    return profit ;

}




// [7,6,4,3,1]

console.log("**maxProfit",maxProfit([2,4,9,1,3,2]));
// console.log("**maxProfit",maxProfit([[7,6,4,3,1]]));
// console.log("**maxProfit",maxProfit([7,1,5,3,6,4]));
