const colors=['blue','red'];
const sizes=['s','m','l',"xl"];
const styles=["roundNeck","vNeck"];
const price=["expensive","cheap","fucking expensive"]


function cartProduct (setA,setB){
    const productcCombination=[];
    for (let set of setA) {
        // console.log("**set",set);
        if(!Array.isArray(set)){
            set=[set]
        }
        for (const sett of setB) {
            productcCombination.push([...set,sett])
        }
    }
    return productcCombination;
}

function cartesian(...sets){
    let tempProduct=sets[0]

    for (let index = 1; index < sets.length; index++) {
       tempProduct= cartProduct(tempProduct,sets[index])
        
    }
    return tempProduct

    // console.log("**sets",sets);

}
// console.log(cartProduct(colors,sizes));
console.log(cartesian(colors,sizes,styles,price));
// Time complexity 0(n*m)
