function bubbleSort(arr){
    let resultArray = [ ...arr ] // copying the input array

    //creating the outer loop
    for(let outer =0 ; outer < resultArray.length; outer++){
        let outerEl= resultArray[outer] // taking the outer element from the result array for comparison

        ///creating the inner loop
        for ( let inner =outer+1; inner < resultArray.length; inner++){
            let innerEl=  resultArray[inner];

            if(outerEl > innerEl){
                resultArray[inner] = outerEl;
                resultArray[outer] =  innerEl; // chaning the position of the elements in the resultArray

                // changing the inner and outer elements
                outerEl = resultArray[outer];
                innerEl = resultArray[inner]
            }
        }

    }

    return resultArray;

}


console.log(bubbleSort([5,90,10,-3,40,3]))