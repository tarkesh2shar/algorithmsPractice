function findElement(sortedArr,element,offset){
    let startIndex=0;
    let endIndex=sortedArr.length-1;
        const middleIndex= Math.floor((endIndex-startIndex)/2);
        if(element===sortedArr[middleIndex]){
            return middleIndex + offset;
        }
        if(sortedArr[middleIndex]<element){
            startIndex=middleIndex+1;
            offset=offset+middleIndex +1;
        }else{
            endIndex=middleIndex;
        }
        return findElement(sortedArr.slice(startIndex,endIndex+1),element,offset);
}


const arr=[1,2,3,4,5,6,7,8,9,10,15,20,25,43,54,65,99]

console.log(findElement(arr,20,0));