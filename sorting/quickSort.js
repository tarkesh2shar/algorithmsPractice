function sort(arr){
    const copiedArr=[...arr];
    if(copiedArr.length<=1){
        return copiedArr;
    }
    const smallerElementsArray=[];
    const biggerElementsArray=[];
    const pivotElement=copiedArr.shift();
    const centeredElementsArray=[pivotElement];

    while(copiedArr.length){
        const currentElement=copiedArr.shift();
        if(currentElement===pivotElement){
            centeredElementsArray.push(currentElement)
        }else if(currentElement<pivotElement){
            smallerElementsArray.push(currentElement);
        }
        else {
            biggerElementsArray.push(currentElement);
        }
    }
    const smallerElementsSortedArray=sort(smallerElementsArray);
    const biggerElementsSortedArray=sort(biggerElementsArray);
    return smallerElementsSortedArray.concat(centeredElementsArray,biggerElementsSortedArray);

}

console.log(sort([-3,10,1,100,-10,22,15]));

//Best Case --> O(n log n) uNSORTED
//Worst cASE --> N^2 (SORTED ALREADY)
//aVERAGE cASE --> nlogn
//Recursive Step Runtime : O(n^logb(a)) => O(n^log2(2)) ==> O(N)
//Runtime Outside of the recursion : O(n)
//Overall Runtime : O(n^logb(a) * log n) ==> O(n log n) 
