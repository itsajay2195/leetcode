function permutations(options){
    let permutations = []
    //reducing the size of  given array till 1
    if(options.length ===1){
        return [options]
    }

    const partialPermutations = permutations(options.slice(1)) //removing the first element of the options array, slice will basically return the new array
    //[["welcome"]]

    const firstOption = options [0]

    for (let i =0 ; i<partialPermutations.length; i++){
        const partialPermutation = partialPermutations[i] //['hi',"hello","welcome"] //i denotes of the array
        // we are introducing an inner loop, since we are evident that the paritalPermiutation is an array of arrays
        for (let j=0; j < partialPermutations.lenght; j++){
            let itemInFront =  partialPermutation.slice(0,j)
            let itemInBack = partialPermutation.slice(j)

            permutations.push(permutationInFront.concat([firstOption], permutationInBack))
        }

    }





}



// array = ["hi","hello","welcome"]