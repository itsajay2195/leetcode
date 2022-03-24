// function evnDigits(arr){
//     return arr.filter(num=> String(num).length %2 === 0)
// }

function evnDigits(arr){
    return arr.filter(num=> String(num).length %2 === 0)
}
 
console.log(evnDigits([42, 564, 5775, 34, 123, 454, 1, 5, 45, 3556, 23442]))