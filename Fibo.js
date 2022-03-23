function fibo(n){
    let result = [1,1];
    for (i = 2; i< n +1; i++){
        result.push(result[i-2]+ result[i-1]);
    }
    return result[n];
}

console.log(fibo(4));
console.log(fibo(5));