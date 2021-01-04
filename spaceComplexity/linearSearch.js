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
// SPACE COMPLEXITY --- O(1)
const arr=[5,3,10,-10,33,51];
console.log(linearSearch(arr,33));
const objects=[
    {name:"Max",age:31},
    {name:"Manu",age:32}
]
console.log(linearSearch(objects,{name:"Manu",age:32},(el,item)=>{
    return el.name==item.name;
}));

