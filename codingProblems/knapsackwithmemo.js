// items=[
//     {id:'a',val:3,w:3},
//     {id:'b',val:6,w:8},
//     {id:'c',val:10,w:3}
// ]
// maxWeight=8;

//Solution=['a','c']

//Knapsack Problem 

//Steps//
//Verify Inputs : Can items be used multiple times?
//ok lets permute without repition for all possible ways and then narrow it down !!

const items=[
    {id:'a',val:3,w:3},
    {id:'b',val:6,w:8},
    {id:'c',val:10,w:3}
]
const maxCap=8;
//Failed//
// const allPermutation =getPermuatation(items);
// console.log("allPermutation",allPermutation);
function knapsackFn(items,capacity,itemIndex,memo){
    console.log("Running");
    if(memo[capacity][itemIndex]){
        return memo[capacity][itemIndex]
    }
    if(itemIndex<0 || capacity===0){
        return {items:[],val:0,w:0}
    }
    if(capacity<items[itemIndex].w){
        return knapsackFn(items,capacity,itemIndex-1,memo);
    }
    const sackWithItem=knapsackFn(items,capacity-items[itemIndex].w,itemIndex-1,memo);
    const sackWithoutItem=knapsackFn(items,capacity,itemIndex-1,memo);

    const valueWithItem = sackWithItem.val + items[itemIndex].val;
    const valueWithoutItem= sackWithoutItem.val;
    let resultSack;

    if(valueWithItem>valueWithoutItem){
        const updatedSack={
            items:sackWithItem.items.concat(items[itemIndex]),
            val:sackWithItem.val+items[itemIndex].val,
            w:sackWithItem.w+items[itemIndex].w
        }
        resultSack= updatedSack;
    }
    else{
        resultSack= sackWithoutItem;
    }
    memo[capacity][itemIndex] =resultSack;
    return resultSack;
    
}

function knapsack(items,cap,index){
    // const mem =Array(cap+1).fill(Array(items.length).fill(undefined));
    const mem=Array.from(Array(cap+1),()=> Array(items.length).fill(undefined) )
    console.log(mem);
  return  knapsackFn(items,cap,index,mem)
}

const allPermutation =knapsack(items,maxCap,items.length-1);
console.log("allPermutation",allPermutation);
















/////////////////////////
function getPermuatation(options){
    const permutations=[];

    if(options.length===1){
        return [options];
    }
    const partialPermutations=getPermuatation(options.slice(1));
    // [['order food]]
    const firstOption=options[0];

    for (let i = 0; i < partialPermutations.length; i++) {
        const partialPermutation = partialPermutations[i];
        for (let j = 0; j <= partialPermutation.length; j++) {
            const permutationInFront=partialPermutation.slice(0,j);
            const permutationAfter=partialPermutation.slice(j);
            permutations.push(permutationInFront.concat([firstOption],permutationAfter))
        }
    }

    return permutations;
}

// Time Complexity (without memoization): O(2^n)
// Time Complexity (with memonization): O(n*C)