const items=[
    {id:'a',val:3,w:3},
    {id:'b',val:6,w:8},
    {id:'c',val:10,w:3}
]

const maxCap=8;

function knapsack(items,maxWeight,index){
    if(index<0 || maxWeight===0){
        return {items:[],val:0,w:0}
    }
    //just single item//
    if(maxWeight<items[index].w){
        return knapsack(items,maxWeight,index-1);
    }
    //in case more than 2 items 
    const sackWithItem= knapsack(items,maxWeight-items[index].w,index-1)
    const sackWithoutItem=knapsack(items,maxCap,index-1)

    const valuesWithItem= sackWithItem.val + items[index].val
    const valueWithoutItem= sackWithoutItem.val;

    if(valuesWithItem>valueWithoutItem){
        const updatedSack={
            items:sackWithItem.items.concat(items[index]),
            val:sackWithItem.val+items[index].val,
            w:sackWithItem.w+items[index].w
        } 
        return updatedSack;
    }else{
        return sackWithoutItem;
    }
}



console.log("**knapsack",knapsack(items,maxCap,items.length-1));