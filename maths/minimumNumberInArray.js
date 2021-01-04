const { performance, PerformanceObserver } = require("perf_hooks")
const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
      console.log(entry)
    })
  }) 
  perfObserver.observe({ entryTypes: ["measure"], buffer: true })


function mimimumNumberInArray(array){
  return  array.sort((a,b)=>{
        return a -b
    })[0]
}
let x=[10,2,8,83,100];
performance.mark("example-start")
console.log(mimimumNumberInArray(x));
performance.mark("example-end")
performance.measure("my", "example-start", "example-end")




function getMin(numbers){
    let currentMin =numbers[0];
    for (const num of numbers) {
        if(num<currentMin){
            currentMin=num;
        }
    }
    return currentMin;

}
performance.mark("start")
console.log(getMin(x));
performance.mark("end")
performance.measure("his", "start", "end")



/**
 * function getMin(numbers){
    let currentMin =numbers[0];       1
    for (const num of numbers) {      1
        if(num<currentMin){           n
            currentMin=num;           0 (Best) 2(Worst)  1 (average)
        }
    }
    return currentMin;                1

    Best Case :[1,2,3]  
    Worst Case: [3,2,1]
    Average Case :[2,1,3]  O(n)
}
 */
function isEven(n){
    return n%2 ===0;    //  O(1)
}
