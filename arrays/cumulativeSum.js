function CumulativeSum(arr){
    let result = [arr[0]]
    for (let i =1; i< arr.length ; i++){
        result .push(result[i-1]+arr[i])
    }   
    console.log(result)
    return result
}


CumulativeSum([1,1,1,1,1])