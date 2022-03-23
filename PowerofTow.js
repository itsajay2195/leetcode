function powerOfTwo(n){
    if(n<1){
        return false
    }
    let result = n;
    while(result !==1){
        if (result %2 !== 0) return false
        result = result/2 // since we are splitting the number/2 . whenver whe modfy the input condition or the exit condition the time complexity is O(log n)
    }
    return true
}

// console.log(powerOfTwo(9));


// aternative

function powerOfTwoa(number){
    if (number <1){
        return false
    }
    
    return (number & (number -1) )=== 0
}


console.log(powerOfTwoa(9)); // time complexity is O(log n)