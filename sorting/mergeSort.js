function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middleIndex);
  const rightArray = arr.slice(middleIndex);

  const leftSortedArray = sort(leftArray);
  const rightSortedArray = sort(rightArray);

  //merging Logic
  const mergedArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;
  while (
    leftArrayIndex < leftSortedArray.length ||
    rightArrayIndex < rightSortedArray.length
  ) {
    if (
      leftArrayIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]
    ) {
      mergedArray.push(rightSortedArray[rightArrayIndex]);
      rightArrayIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftArrayIndex]);
      leftArrayIndex++;
    }
  }
  return mergedArray;
}
console.log(sort([-10, 33, 5, 10, 3, -19, -99, 100]));

// BEST CASE ---->   O(nlogn)
//WORSE CASE --->    O(nlogn)
//AVERAGE CASE --->  O(nlogn)
