function recurison(n){
    if (n ==1) return 1; //1 
    return n * recurison(n-1);// 1
}

console.log(recurison(3));


// time complexity O(n)