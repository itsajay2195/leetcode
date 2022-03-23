function CumulativeSum(arr){
    let result = [arr[0]]
    for (let i =1; i< arr.length ; i++){
        let val = result[i-1]+arr[i] 
       result.push(val)
    }   
    console.log(result.filter(number => number>0))
    return result
}


CumulativeSum([1, -1, -1, -1, 1])