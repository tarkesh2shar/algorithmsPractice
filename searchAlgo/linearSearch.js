function linearSearch(arr,elementToFind,comparator){
    let index=0;
for (const item of arr) {
        if(typeof elementToFind==='object' && elementToFind!==null && comparator(elementToFind,item)){
            return index;
        }
        if(item==elementToFind){
            return index;
        }
        index++;
}
}
const arr=[5,3,10,-10,33,51];
console.log(linearSearch(arr,33));
const objects=[
    {name:"Max",age:31},
    {name:"Manu",age:32}
]
console.log(linearSearch(objects,{name:"Manu",age:32},(el,item)=>{
    return el.name==item.name;
}));

//Best case -- item we are serching the first item in the list O(1)
//Average Case -- Tends to be O(n)
//Worst case -- last item O(n)