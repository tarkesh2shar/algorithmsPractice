function isPower2(n){
    let currentTwoPowers=2;
    while(n>currentTwoPowers){
        currentTwoPowers=currentTwoPowers*2;
    }
    return currentTwoPowers===n;
}



// 8 --> 2^3
//O(n) --> Log(n)



console.log(isPower2(1));
console.log(isPower2(81));
console.log(isPower2(128));
console.log(isPower2(8));
console.log(isPower2(18));