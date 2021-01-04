function sort(arr){
    const resultArray=[...arr];
    for (let i = 0; i < resultArray.length; i++) {
        let outerElement= resultArray[i];
        for (let j = i+1; j < resultArray.length; j++) {   
            let innerElement=resultArray[j];
            if ( outerElement>innerElement){
                // let temp = resultArray[j]
                resultArray[i]=innerElement
                resultArray[j]=outerElement;

                outerElement=resultArray[i];
                innerElement=resultArray[j];
            }
        }
    }
    return resultArray;
}
console.log(sort([5,10,-4,1,100,93]));

//Space complexity O(1)

//BEST CASE --> O(n)
//Worst Case --> O(n^2)
//Average Case --> O(n^2)

