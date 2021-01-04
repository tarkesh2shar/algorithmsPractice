const  availableCoins=[100,50,20,10,5,2,1];
const  targetValue=129;
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
const change=computeChange(availableCoins,targetValue);
console.log(change);

//Time Complexity ( GREEDY SOLUTION): O(n)
