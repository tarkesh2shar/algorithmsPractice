const { performance, PerformanceObserver } = require("perf_hooks")
const perfObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
      console.log(entry)
    })
  }) 
  perfObserver.observe({ entryTypes: ["measure"], buffer: true })

function sumUp(n){
    let result=0;
    for (let i = 0; i <=n; i++) {
        result=result+i;
    }
   return result;
}
//---------------------------------------------------------------
// Linear Time 
performance.mark("example-start")
console.log(sumUp(10000000000));
performance.mark("example-end")
performance.measure("LINEAR", "example-start", "example-end")
//-----------------------------------------------------------------
// Constant Time 
function sumUpContastTime(n){
    return (n/2)*(1+n);
}
performance.mark("example-start")
console.log(sumUpContastTime(10000000000));
performance.mark("example-end")
performance.measure("CONSTANT", "example-start", "example-end")
//------------------------------------------------------------------
//Quadratic Time 


//------------------------------------------------------------------
//Cubic Time


// BIG O Notation //  
  //\\  O(N)
  //\\  O(1)
  //\\  O(N^2)
  //\\  O(N^3)