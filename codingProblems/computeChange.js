const  availableCoins=[8,6,5,1];
const  targetValue=11;
//with minimum amount of coins
//Steps 
// 1) Verify Inputs
// 2) Think about Problem + Verbal Solution
// 3) Write down a First Version 
// 4) Verfify Results 
// 5) Derive Time Complexity
// 6) Explore Alternative Approaches.


function computeChange(coins,amount){
    // const transformedCoins ={};
    let remainingAmount =amount;
    // for (const coin of coins) {
    //     transformedCoins[coin]=0;
    // }
    const calculatedChange={
        selectedCoins:{},
        numberOfCoins:0
    }
    for (const coin of coins) {
        const count = Math.floor(remainingAmount/coin);
        calculatedChange[coin]=count;
        calculatedChange.numberOfCoins+=count;
        remainingAmount =remainingAmount-coin*count;
    }
    return calculatedChange;
    // console.log(calculatedChange);
}
function computeChangeBruteForce(coins,amount){
    const results=[];
    for (let i = 0; i < coins.length; i++) {
        results.push(computeChange(coins.slice(i),amount));
    }
    let smallestAmountOfCoins=Number.MAX_SAFE_INTEGER;
    let finalResult;
    for (const result of results) {
        if(result.numberOfCoins<smallestAmountOfCoins){
            smallestAmountOfCoins=result.numberOfCoins;
            finalResult=result;
        }
    }
    return finalResult;
}
const change=computeChangeBruteForce(availableCoins,targetValue);
console.log(change);

//Time Complexity ( GREEDY SOLUTION): O(n)
