function Insertion(arr1,arr2 ){
    let result =[...arr1, ...arr2]
    //[10,1,20,5,40]
    for (let outer = 0; outer < result.length; outer ++){
        let outerEl = result[outer]
        for (let inner = outer +1 ; inner < result.length ; inner ++){
            let innerEl = result[inner]
            if(result[outer] > result[inner]){
                result[inner] = outerEl
                result[outer] = innerEl

                outerEl= result[outer];
                innerEl = result[inner]

            }
        }

    }
    return result;
}



console.log(Insertion([1, 2, 3, 4, 4],[2, 4, 5, 5]))